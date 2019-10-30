import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../loginService/login.service';
import { Individuo } from 'src/app/domain/Individuo';
import { REST_SERVER_URL } from '../../configuration';
import { TypeRelationService } from '../typeRelation.service';

@Injectable({
  providedIn: 'root'
})
export class EnemiesService implements TypeRelationService{

  constructor(private httpCLient: HttpClient, private loginService: LoginService) { }

  getidUserLogged() {
    return this.loginService.getUserLoggedId()
  }

  async getIndividuals() {
    const enemigos = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/enemigos/' + this.getidUserLogged()).toPromise()
    return enemigos.map((enemigo) => Individuo.fromJson(enemigo))

  }

  async getNonIndividuals() {
    const Individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/enemigos_no_agregados/' + this.getidUserLogged()).toPromise()
    return Individuals.map((Individual) => Individuo.fromJson(Individual))
  }

  updateIndividual(individualUpdate: Individuo) {
    return this.httpCLient.put<Individuo>(REST_SERVER_URL + '/agregar_enemigo/' + this.getidUserLogged(), individualUpdate).toPromise()
  }

  deleteIndividual(individualDelete: Individuo){
    this.httpCLient.put<Individuo>(REST_SERVER_URL + '/eliminar_enemigo/' + this.getidUserLogged(), individualDelete).toPromise()
  }
}
