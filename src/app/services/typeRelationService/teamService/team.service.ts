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
  
  selectedTeam: EquipoComplete 

  constructor(private httpCLient: HttpClient, private loginService: LoginService) { }

  getidUserLogged() {
    return this.loginService.getUserLoggedId()
  }

  async getAllTeams() {
    const teams = await this.httpCLient.get<Equipo[]>(REST_SERVER_URL + "/equipos/" + this.getidUserLogged()).toPromise()
    return teams.map((team) => Equipo.fromJson(team))
  }

  async getFullTeam(id: String) {
    const team = await this.httpCLient.get<EquipoComplete>(`${REST_SERVER_URL}/equipo_completo/${id}`).toPromise()
    this.selectedTeam = EquipoComplete.fromJson(team)
  }

  getIndividuals(id: String) {
    return this.selectedTeam.integrantes
  }

  getNonIndividuals(id: String) {
    return this.selectedTeam.posiblesIntegrantes
  }

  async updateTeam() {
    if (this.selectedTeam.isANewTeam()) {
      this.selectedTeam.owner = this.loginService.getUser()
    }
    await this.httpCLient.put<Equipo>(REST_SERVER_URL + "/actualizar_equipo", this.selectedTeam.toJSON()).toPromise()

  }

  async deleteTeam(teamToDelete: String) {
    return await this.httpCLient.delete<EquipoComplete>(REST_SERVER_URL + '/eliminar_equipo/' + teamToDelete).toPromise()
  }

  async abandonTeam(teamId: String) {
    return await this.httpCLient.delete<EquipoComplete>(REST_SERVER_URL + '/abandonar_equipo/' + teamId
      + '/' + this.getidUserLogged()).toPromise()
  }

  async updateIndividual(individualUpdate: Individuo) {
    this.selectedTeam.addMember(individualUpdate)
  }

  async deleteIndividual(deleteIndividual: Individuo) {
    this.selectedTeam.deleteMember(deleteIndividual)
  }

  getSelectedTeam() {
    return this.selectedTeam
  }
}
