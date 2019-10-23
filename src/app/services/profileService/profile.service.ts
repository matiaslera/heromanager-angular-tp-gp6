import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginService } from '../loginService/login.service';
import { Individuo } from 'src/app/domain/Individuo';
import { REST_SERVER_URL } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpCLient: HttpClient, private loginService: LoginService) { }

  userLogged() {
    return this.loginService.getUser()
  }
   getFullProfile() {
    return this.httpCLient.post<Individuo>(REST_SERVER_URL+'/perfil_completo',this.userLogged()).toPromise()
  }
}
