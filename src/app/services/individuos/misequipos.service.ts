import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Equipo } from 'src/app/domain/misequipos'
import { REST_SERVER_URL } from 'src/app/services/configuracion'

export interface IEquipoService {
  todosLosEquipos(): Promise<Equipo[]>
  getEquipoById(id: number): Promise<Equipo>
  actualizarEquipo(equipo: Equipo): void
}

@Injectable({
  providedIn: 'root'
})
export class EquiposService implements IEquipoService {

  constructor(private http: HttpClient) { }

  async todosLosEquipos() {
    const equipo = await this.http.get<Equipo[]>(REST_SERVER_URL).toPromise()
    return equipo.map((equipo) => Equipo.fromJson(equipo))
  }

  async getEquipoById(id: number) {
    const equipo = await this.http.get<Equipo>(REST_SERVER_URL + '/misequipos/' + id).toPromise()
    return Equipo.fromJson(equipo)
  }

  async actualizarEquipo(equipo: Equipo) {
       return this.http.put(REST_SERVER_URL + '/misequipos/' + equipo.id, equipo.toJSON()).toPromise()
  }

  async agregarEquipo(equipo: Equipo){
    return this.http.post(REST_SERVER_URL, equipo.toJSON()).toPromise()
  }
  async eliminarEquipo(equipo: Equipo){
    return this.http.delete(REST_SERVER_URL, equipo.toJSON()).toPromise()
  }

}