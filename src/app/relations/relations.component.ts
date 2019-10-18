import { Component, OnInit } from '@angular/core';
import { AmigosService } from '../services/amigosService/amigos.service';
import { Individuo } from '../domain/Individuo';
import { LoginService } from '../services/loginService/login.service';
import { EnemigosService } from '../services/enemigosService/enemigos.service';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
  amigos : Array<Individuo> = []
  enemigos : Array<Individuo> = []

  constructor(private amigosService: AmigosService, private loginService: LoginService, private enemigosService: EnemigosService) { 
  }
  

  async ngOnInit() {
    this.amigos = await this.amigosService.amigosDeIndividuo(this.loginService.getidUserLogged())
    this.enemigos = await this.enemigosService.enemigosDeIndividuo(this.loginService.getidUserLogged())
  }


}
