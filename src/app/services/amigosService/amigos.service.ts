import { Injectable } from '@angular/core';
import { Individuo } from 'src/app/domain/Individuo';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../configuration'
@Injectable({
  providedIn: 'root'
})
export class AmigosService {

  constructor(private httpCLient: HttpClient) {}

  async individuos() {
    const individuos = await this.httpCLient.get<Individuo[]>('./assets/Amigos.json').toPromise()
    return individuos.map((individuo) => Individuo.fromJson(individuo))
  }

  async amigosDeIndividuo(id: string) {
    const amigo = await this.httpCLient.get<Individuo>(REST_SERVER_URL + '/tareas/' + id).toPromise()
    return Individuo.fromJson(amigo)
 
  }
}
