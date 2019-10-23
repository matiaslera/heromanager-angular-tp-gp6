import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/typeRelationService/friendsService/friends.service';
import { EnemiesService } from '../services/typeRelationService/enemiesService/enemies.service';
import { TypeRelationService } from '../services/typeRelationService/typeRelation.service';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
  typeService : TypeRelationService
  
  
  constructor(private friendsService: FriendsService, private enemiesService: EnemiesService) { 
  
  }
  

  async ngOnInit() {
  }
  


}
