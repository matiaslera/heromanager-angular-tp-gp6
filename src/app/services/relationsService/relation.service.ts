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

  async getNonFriendIndividuals() {
    const Individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/amigos_no_agregados/' + this.getidUserLogged()).toPromise()
    return Individuals.map((Individual) => Individuo.fromJson(Individual))
  }
  async getNonEnemysIndividuals() {
    const Individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/enemigos_no_agregados/' + this.getidUserLogged()).toPromise()
    return Individuals.map((Individual) => Individuo.fromJson(Individual))
  }

  async enemysOfIndividual() {
    const enemigos = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/enemigos/' + this.getidUserLogged()).toPromise()
    return enemigos.map((enemigo) => Individuo.fromJson(enemigo))
  }

  updateIndividual(individualUpdate: Individuo){
     return this.httpCLient.put<Individuo>(REST_SERVER_URL + '/agregar_amigo/' + this.getidUserLogged(), individualUpdate.toJSON()).toPromise()  
  }

}
