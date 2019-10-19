import { Component, OnInit } from '@angular/core';
import { Individuo } from '../domain/Individuo';
import { LoginService } from '../services/loginService/login.service';
import { RelationService } from '../services/relationsService/relation.service';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
  friends : Array<Individuo> = []
  enemies : Array<Individuo> = []

  constructor(private relationService: RelationService, private loginService: LoginService) { 
  }
  

  async ngOnInit() {
    this.friends = await this.relationService.getAllIndividuals(this.loginService.getidUserLogged())
    this.enemies = await this.relationService.enemigosDeIndividuo(this.loginService.getidUserLogged())
  }


}
