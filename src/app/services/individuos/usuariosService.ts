import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from 'src/app/services/configuracion'
import { Usuario } from 'src/app/domain/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  async usuariosPosibles() {
    return this.http.get<Usuario[]>(REST_SERVER_URL + '/usuarios').toPromise()
  }

}