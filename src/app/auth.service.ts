import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserData: any = new BehaviorSubject(null)


  constructor(private _http: HttpClient, private _Router: Router) {
    if (localStorage.getItem("currentUser")) {
       this.saveCurrentData()

    }

  }



  register(formData: object): Observable<any> {

    return this._http.post("https://route-egypt-api.herokuapp.com/signup", formData)

  }

  login(formData: object): Observable<any> {

    return this._http.post("https://route-egypt-api.herokuapp.com/signin", formData)

  }

  saveCurrentData() {
    let endecoded: any = localStorage.getItem("currentUser")
    let decoded = jwtDecode(endecoded)
    this.currentUserData.next(decoded)
  }

  logout() {
    this.currentUserData.next(null)
    localStorage.removeItem("currentUser")
    this._Router.navigate(["/login"])
  }


}
