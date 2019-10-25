import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { REST_SERVER_URL } from '../configuration';
import { Usuario } from 'src/app/domain/usuario'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
  usuario:Usuario;

  constructor(private http: HttpClient) { }

  async usuariosPosibles() {
    return this.http.get<Usuario[]>(REST_SERVER_URL + '/usuarios').toPromise()
  }

  addHero (user: Usuario){
    return this.http.post<Usuario>(REST_SERVER_URL, user).toPromise}

  async authenticate(user: Usuario) {
    this.usuario = await this.http.post<Usuario>(REST_SERVER_URL + '/login', user).toPromise()
      .then((individuo) => {
        return individuo
      })
  }
}