import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _http: AuthService, private _router: Router) { }

  error: string = ""

  registerForm: FormGroup = new FormGroup({

    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(90)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern("")])
  })


  // consoleFun(registerForm: FormGroup) {
  //   console.log(registerForm);

  // }


  submit(registerForm: FormGroup) {
    this._http.register(registerForm.value).subscribe((response) => {
      if (response.message === "success") {
        this._router.navigate(['/login'])
      } else {
        this.error = response.errors.email.message
        console.log(response);

      }
    })
  }

}
