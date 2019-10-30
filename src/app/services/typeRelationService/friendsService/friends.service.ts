import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../loginService/login.service';
import { REST_SERVER_URL } from '../../configuration';
import { Individuo } from 'src/app/domain/Individuo';
import { TypeRelationService } from '../typeRelation.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService implements TypeRelationService{

  constructor(private httpCLient: HttpClient, private loginService: LoginService) { }

  getidUserLogged() {
    return this.loginService.getUserLoggedId()
  }

  async getIndividuals() {
    const friends = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/amigos/' + this.getidUserLogged()).toPromise()
    return friends.map((friend) => Individuo.fromJson(friend))
  }

  async getNonIndividuals() {
    const Individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/amigos_no_agregados/' + this.getidUserLogged()).toPromise()
    return Individuals.map((Individual) => Individuo.fromJson(Individual))
  }

  updateIndividual(individualUpdate: Individuo){
    return this.httpCLient.put<Individuo>(REST_SERVER_URL + '/agregar_amigo/' + this.getidUserLogged(), individualUpdate).toPromise()  
  }

  deleteIndividual(individualDelete: Individuo){
    return this.httpCLient.put<Individuo>(REST_SERVER_URL + '/eliminar_amigo/' + this.getidUserLogged(),individualDelete ).toPromise()
  }
}
