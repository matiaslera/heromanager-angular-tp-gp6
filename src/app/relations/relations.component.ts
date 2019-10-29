import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/typeRelationService/friendsService/friends.service';
import { EnemiesService } from '../services/typeRelationService/enemiesService/enemies.service';
import { TypeRelationService } from '../services/typeRelationService/typeRelation.service';
import { Individuo } from '../domain/Individuo';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
  async ngOnInit() {
    this.friends = await this.friendsService.getIndividuals()
    this.enemies = await this.enemiesService.getIndividuals()
    this.nonFriends = await this.friendsService.getNonIndividuals()
    this.nonEnemies = await this.enemiesService.getNonIndividuals()
  }
  typeService: TypeRelationService
  friends: Individuo[]
  enemies: Individuo[]
  nonFriends: Individuo[]
  nonEnemies: Individuo[]

  constructor(private friendsService: FriendsService, private enemiesService: EnemiesService) {

  }






}
