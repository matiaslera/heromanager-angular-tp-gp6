import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginService } from '../loginService/login.service';
import { Individuo } from 'src/app/domain/Individuo';
import { REST_SERVER_URL } from '../configuration';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpCLient: HttpClient, private loginService: LoginService) { }

  async getFullProfile(id:String ) {
    return of (await this.httpCLient.get<Individuo>(REST_SERVER_URL + '/perfil_completo/' +id).toPromise())
  }
}
