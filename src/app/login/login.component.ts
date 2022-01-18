import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _http: AuthService, private _Router: Router) { }
  error: string = ""
  
  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern("")])
  })

  sub(loginForm: FormGroup) {
    this._http.login(loginForm.value).subscribe((response) => {

      if (response.message === "success") {
        localStorage.setItem("currentUser", response.token)
        this._http.saveCurrentData()
        this._Router.navigate(['/home'])

      } else {
        this.error = response.errors.email.message
      }
    })
  }

}
