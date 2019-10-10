import { Injectable } from '@angular/core';
import { Amigos } from 'src/app/domain/Amigos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmigosService {

  constructor(private httpCLient: HttpClient) {}

  getData() {
    return this.httpCLient.get<Amigos[]>('./assets/Amigos.json')
  }

}
