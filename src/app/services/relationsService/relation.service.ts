import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Individuo } from 'src/app/domain/Individuo';
import { REST_SERVER_URL } from '../configuration';
import { LoginService } from '../loginService/login.service';

@Injectable({
  providedIn: 'root'
})
export class RelationService {

  constructor(private httpCLient: HttpClient, private loginService: LoginService) { }

  getidUserLogged(){
    return this.loginService.getidUserLogged()
  }

  async getFriendsOfIndividual() {
    const friends = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/amigos/' + this.getidUserLogged()).toPromise()
    return friends.map((friend) => Individuo.fromJson(friend))
  }

  async getNoFriendIndividuals() {
    const Individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/amigosnoagregados/' + this.getidUserLogged()).toPromise()
    return Individuals.map((Individual) => Individuo.fromJson(Individual))
  }
  async getNoEnemysIndividuals() {
    const Individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/enemigosnoagregados/' + this.getidUserLogged()).toPromise()
    return Individuals.map((Individual) => Individuo.fromJson(Individual))
  }

  async enemysOfIndividual() {
    const enemigos = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/enemigos/' + this.getidUserLogged()).toPromise()
    return enemigos.map((enemigo) => Individuo.fromJson(enemigo))
  }

}
