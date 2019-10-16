import { Component, OnInit } from '@angular/core';
import { AmigosService } from '../services/amigosService/amigos.service';
import { Individuo } from '../domain/Individuo';
import { LoginService } from '../services/loginService/login.service';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
  amigos : Array<Individuo> = []
  
  constructor(public amigosService: AmigosService, private loginServer: LoginService) { 
  }
  

  async ngOnInit() {
    this.amigos = await this.amigosService.individuos()
  }


}
