import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  constructor(private _http: HttpClient) { }

  getHomeData(): Observable<any> {
    return this._http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5e2237fcd342bf86e1cc62c9d23654")
  }

  getTichData(): Observable<any> {
    return this._http.get("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654")
  }

  getSportData(): Observable<any> {
    return this._http.get("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1c5e2237fcd342bf86e1cc62c9d23654")
  }

  getHealthData(): Observable<any> {
    return this._http.get("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1c5e2237fcd342bf86e1cc62c9d23654")
  }


}
