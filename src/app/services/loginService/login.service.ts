import { Injectable } from '@angular/core';
import { _supportsShadowDom } from '@angular/cdk/platform';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../configuration';
import { Individuo } from 'src/app/domain/Individuo';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private userLogged: Individuo = new Individuo

  constructor(private http: HttpClient) {
  }
  async authenticate(credentials: Individuo) {
    this.userLogged = await this.http.post<Individuo>(REST_SERVER_URL + '/login', credentials).toPromise()
  }
  getUser() {
    return this.userLogged
  }

  getUserLoggedId() {
    return this.userLogged.id
  }

  isAuthenticated() {
    return !isUndefined(this.userLogged.id)
  }

}

