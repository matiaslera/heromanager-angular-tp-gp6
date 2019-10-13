import { Injectable } from '@angular/core';
import { Amigos } from 'src/app/domain/Amigos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmigosService {

  constructor(private httpCLient: HttpClient) {}

  async individuos() {
    const individuos = await this.httpCLient.get<Amigos[]>('./assets/Amigos.json').toPromise()
    return individuos.map((individuo) => Amigos.fromJson(individuo))
  }

}
