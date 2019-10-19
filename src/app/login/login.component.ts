import { Component, OnInit, Inject } from '@angular/core'
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
  constructor(private userLogService: LoginService, private snackBar: MatSnackBar, private biulter: FormBuilder) {
    this.loginForm = this.biulter.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }

  authenticate() {
    this.userLogService.authenticate(this.getUsernameValue(), this.getPasswordValue())
    if (!this.userLogService.isAuthenticated()) {
      this.error()
    }
  }
  formHasData(){
    return this.loginForm.status == 'INVALID'
  }
  error() {
    this.snackBar.open('Nombre de usuario o contraseña invalido', 'x', {
      duration: 100000,
    });
  }

  getUsernameValue():string{
    return this.loginForm.get('username').value
  }
  getPasswordValue():string{
    return this.loginForm.get('password').value
  }
}






