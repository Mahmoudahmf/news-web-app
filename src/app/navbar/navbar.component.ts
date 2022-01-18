import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  isLogin: boolean = false

  constructor(private _auth: AuthService) {

    _auth.currentUserData.subscribe(() => {

      if (_auth.currentUserData.getValue() == null) {
        this.isLogin = false
      } else {
        this.isLogin = true
      }
    })
  }


  logout() {
    this._auth.logout()
  }

}
