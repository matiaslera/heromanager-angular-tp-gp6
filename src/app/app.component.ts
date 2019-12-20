import { Component } from '@angular/core';
import { LoginService } from './services/loginService/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userLogService: LoginService){}
  title = 'hero-manager'
  isLogged(){
    return this.userLogService.isAuthenticated()
  }
  loggedId(){
    return this.userLogService.getUserLoggedId()
  }
}
