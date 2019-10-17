import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Individuo } from 'src/app/domain/Individuo';
import { REST_SERVER_URL } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class EnemigosService {

constructor(private httpCLient: HttpClient) { }

async enemigosDeIndividuo(id: string) {
  const enemigos = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/enemigos/' + id).toPromise()
  return enemigos.map((enemigo) => Individuo.fromJson(enemigo))
}
}
