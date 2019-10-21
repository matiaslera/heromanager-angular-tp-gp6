import { Injectable } from '@angular/core';
import { _supportsShadowDom } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../configuration';
import { Individuo } from 'src/app/domain/Individuo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authenticated: boolean
  private userLogged: string

  constructor(private router: Router, private http: HttpClient) {
    this.authenticated = false
  }

  authenticate(apodo: string, password: string) {
    // this.deactivateLogin()//borrar para usar con el api rest
    this.http.post<Individuo>(REST_SERVER_URL + "/login", { apodo, password })
      .subscribe((resp: any) => {
        this.authenticated = true
        this.userLogged = resp.id
        this.router.navigate(['home']);
      })
  }

  deactivateLogin() {
    this.authenticated = true
    this.router.navigate(['home']);
  }
  getidUserLogged() {
    return this.userLogged

  }

  isAuthenticated() {
    return this.authenticated
  }

}

