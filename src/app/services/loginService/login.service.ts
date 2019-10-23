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
  private userLogged: Individuo

  constructor(private http: HttpClient, private router: Router) {
    this.authenticated = false
  }
  async authenticate(credentials: Individuo) {
    this.userLogged = await this.http.post<Individuo>(REST_SERVER_URL + '/login', credentials).toPromise()
      .then((individuo) => {
        this.authenticated = true
        return individuo
      })
  }

  getUser() {
    return this.userLogged
  }
  
  getidUserLogged() {
    return this.userLogged.id
  }

  isAuthenticated() {
    return this.authenticated
  }

}

