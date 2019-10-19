import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Individuo } from 'src/app/domain/Individuo';
import { REST_SERVER_URL } from '../configuration';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private httpCLient: HttpClient) { }

  async getFriendsIndividual(id: string) {
    const friends = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/amigos/' + id).toPromise()
    return friends.map((friend) => Individuo.fromJson(friend))
  }

  async getAllIndividuals(id: string) {
    const Individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/amigosnoagregados/' + id).toPromise()
    return Individuals.map((Individual) => Individuo.fromJson(Individual))
  }

  async enemigosDeIndividuo(id: string) {
    const enemigos = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/enemigos/' + id).toPromise()
    return enemigos.map((enemigo) => Individuo.fromJson(enemigo))
  }
}
