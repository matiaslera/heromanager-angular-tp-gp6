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
  nonFriends : Array<Individuo> = []
  nonEnemies : Array<Individuo> = []

  constructor(private relationService: RelationService) { 
  }
  

  async ngOnInit() {
    this.friends = await this.relationService.getFriendsOfIndividual()
    this.nonFriends = await this.relationService.getNonFriendIndividuals()
    this.enemies = await this.relationService.enemysOfIndividual()
    this.nonEnemies = await this.relationService.getNonEnemysIndividuals()
  }


}
