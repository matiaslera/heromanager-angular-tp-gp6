import { Component, OnInit, Inject } from '@angular/core'
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar'
import { LoginService } from '../services/loginService/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user2=''
  constructor(private userLogService: LoginService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  authenticate(user: any, password: any) {
    this.userLogService.authenticate(user.value, password.value)
    if (!this.userLogService.isAuthenticated()) {
      this.error()
    }
    else{
      this.router.navigate(['home']);
    }
  }

  error(){
    this.snackBar.open('Nombre de usuario o contraseña invalido','x', {
      duration: 100000,
    });
  }
}






