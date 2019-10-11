import { Component, OnInit, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoginService } from '../services/loginService/login.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup
  constructor(private userLogService: LoginService, private router: Router, private snackBar: MatSnackBar, private biulter: FormBuilder) {
    this.loginForm = this.biulter.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }

  authenticate(user, password) {
    this.userLogService.authenticate(user.value, password.value)
    if (!this.userLogService.isAuthenticated()) {
      this.error()
    }
    else {
      this.router.navigate(['home/misequipos']);
    }
  }

  error() {
    this.snackBar.open('Nombre de usuario o contraseña invalido', 'x', {
      duration: 100000,
    });
  }
}






