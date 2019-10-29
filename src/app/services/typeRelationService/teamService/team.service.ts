import { Injectable } from '@angular/core';
import { Individuo } from 'src/app/domain/Individuo';
import { LoginService } from '../../loginService/login.service';
import { HttpClient } from '@angular/common/http';
import { REST_SERVER_URL } from '../../configuration';
import { Equipo, EquipoComplete } from 'src/app/domain/misequipos';

@Injectable({
  providedIn: 'root'
})
export class TeamService implements TeamService {


  constructor(private httpCLient: HttpClient, private loginService: LoginService) { }
  

   getidUserLogged() {
    return this.loginService.getidUserLogged()
  }
  
  async getAllTeam() {
    const teams = await this.httpCLient.get<Equipo[]>(REST_SERVER_URL +  "/equipos/" + this.getidUserLogged()).toPromise()
    return teams.map((team) => Equipo.fromJson(team)) 
  }
  async getFullTeam(id:String) {
    return await this.httpCLient.get<Equipo>(REST_SERVER_URL +  "/equipo_completo/" + id).toPromise()
  }

 async getIndividuals(id:String) {
    const individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL +  '/integrantes/').toPromise()
    return individuals.map((individual) => Individuo.fromJson(individual)) 
  }
  async getNonIndividuals(id:String) {
    const Individuals = await this.httpCLient.get<Individuo[]>(REST_SERVER_URL + '/integrantes_no_agregados/'+id).toPromise()
    return Individuals.map((Individual) => Individuo.fromJson(Individual))
 
  }

  async addTeam(newTeam:EquipoComplete){
    newTeam.id=null
    await this.httpCLient.put(REST_SERVER_URL + '/crear_equipo',newTeam).toPromise()
  }

  updateTeam(teamUpdate: EquipoComplete){
    return this.httpCLient.put<Equipo>(REST_SERVER_URL + "/actualizar_equipo", teamUpdate).toPromise()
  }


  updateIndividual(individualUpdate: Individuo) {

  }
  deleteIndividual(deleteIndividual: Individuo) {

  }

}
