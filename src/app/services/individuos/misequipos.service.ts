import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Equipo, EquipoComplete } from 'src/app/domain/misequipos'
import { REST_SERVER_URL } from 'src/app/services/configuracion'

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TypeRelationService } from '../typeRelationService/typeRelation.service';
import { Individuo } from 'src/app/domain/Individuo';


export interface IEquipoService {
  todosLosEquipos(): Promise<Equipo[]>
  getEquipoById(id: number): Promise<Equipo>
  actualizarEquipo(equipo: Equipo): void
}

@Injectable({  providedIn: 'root'})
export class EquiposService implements TypeRelationService {
  private equipo:EquipoComplete
  
  constructor(private http: HttpClient) { }
  
  getIndividuals() {
    this.equipo.integrantes
  }
  async getNonIndividuals() {
    const equipo = await this.http.get<EquipoComplete[]>(REST_SERVER_URL + "/integrantes_no_agregados/" + this.equipo.id).toPromise()
    return equipo.map((equipo) => Equipo.fromJson(equipo))
  }
  updateIndividual(individualUpdate: Individuo) {
    throw new Error("Method not implemented.");
  }
  deleteIndividual(deleteIndividual:Individuo) {
    throw new Error("Method not implemented.");
  }


  async todosLosEquipos() {
    const equipo = await this.http.get<EquipoComplete[]>(REST_SERVER_URL).toPromise()
    return equipo.map((equipo) => Equipo.fromJson(equipo))
    
  }
  async getEquipoById(id: number) {
    const equipo = await this.http.get<Equipo>(REST_SERVER_URL + '/misequipos/' + id).toPromise()
    return Equipo.fromJson(equipo)
    
  }

  async actualizarEquipo(equipo: Equipo) {
    return this.http.put(REST_SERVER_URL + '/misequipos/' + equipo.id, equipo).toPromise()
       
  }

  async agregarEquipo(equipo: Equipo){
   // return this.http.post(REST_SERVER_URL, equipo.toJSON()).toPromise()
  }
  async eliminarEquipo(equipo: Equipo){
    //return this.http.delete(REST_SERVER_URL, equipo.toJSON()).toPromise()
  }

  setTeam(equipo:EquipoComplete){
    this.equipo=equipo
  }

}