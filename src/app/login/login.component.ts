import { Component, OnInit, Inject } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoginService } from '../services/loginService/login.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Individuo } from '../domain/Individuo'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup
  private userCredentials:Individuo
  constructor(private router: Router,private userLogService: LoginService, private snackBar: MatSnackBar, private biulter: FormBuilder) {
    this.loginForm = this.biulter.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.userCredentials = new Individuo
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }

  async authenticate() {
    try{
      await this.userLogService.authenticate(this.userCredentials)
      this.router.navigate(['home'])
    }
    catch(e){
      this.error(e.error)
    }

  }
  formHasData(){
    return this.loginForm.status == 'INVALID'
  }
  error(errorType:string) {
    this.snackBar.open(errorType, 'x', {
      duration: 2000,
    });
  }
  navigateHome(){
    this.router.navigate(['home']);
  }
  getUsernameValue():string{
    return this.loginForm.get('username').value
  }
  getPasswordValue():string{
    return this.loginForm.get('password').value
  }
}






