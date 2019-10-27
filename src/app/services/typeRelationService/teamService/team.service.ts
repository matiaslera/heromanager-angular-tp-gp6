import { Injectable } from '@angular/core';
import { Individuo } from 'src/app/domain/Individuo';
import { LoginService } from '../../loginService/login.service';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../../configuration';

@Injectable({
  providedIn: 'root'
})
export class TeamService implements TeamService {


  constructor(private httpCLient: HttpClient, private loginService: LoginService) { }

   getidUserLogged() {
    return this.loginService.getidUserLogged()
  }

 async getIndividuals() {
    const individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL +  '/enemigos/' + this.getidUserLogged()).toPromise()
    return individuals.map((individual) => Individuo.fromJson(individual)) 
  }
  async getNonIndividuals() {
    const Individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/enemigos_no_agregados/' + this.getidUserLogged()).toPromise()
    return Individuals.map((Individual) => Individuo.fromJson(Individual))
 
  }
  updateIndividual(individualUpdate: Individuo) {

  }
  deleteIndividual(deleteIndividual: Individuo) {

  }


}
