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
  noFriends : Array<Individuo> = []
  noEnemies : Array<Individuo> = []

  constructor(private relationService: RelationService) { 
  }
  

  async ngOnInit() {
    this.friends = await this.relationService.getFriendsOfIndividual()
    this.noFriends = await this.relationService.getNoFriendIndividuals()
    this.enemies = await this.relationService.enemysOfIndividual()
    this.noEnemies = await this.relationService.getNoEnemysIndividuals()
  }


}
