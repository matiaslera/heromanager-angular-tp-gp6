import { Injectable } from '@angular/core';
import { Individuo } from 'src/app/domain/Individuo';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../configuration'
@Injectable({
  providedIn: 'root'
})
export class AmigosService {

  constructor(private httpCLient: HttpClient) { }

  async amigosDeIndividuo(id: string) {
    const amigos = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/amigos/' + id).toPromise()
    return amigos.map((amigo) => Individuo.fromJson(amigo))
  }

 
}
