import { Component, OnInit, Input } from '@angular/core';
import { Individuo } from 'src/app/domain/Individuo';
import { FormControl } from '@angular/forms';
import { RelationService } from 'src/app/services/relationsService/relation.service';
import { LoginService } from 'src/app/services/loginService/login.service';
import * as _ from 'lodash'
@Component({
  selector: 'app-typeOfRelations',
  templateUrl: './typeOfRelations.component.html',
  styleUrls: ['./typeOfRelations.component.css']
})
export class TypeOfRelationsComponent implements OnInit {

  @Input() title: any
  @Input() individuos: Individuo[]
  @Input() individualsNotAdded: Individuo[]
  candidateIndividualToAdd: Individuo 
  myControl = new FormControl();

  constructor(private relationService: RelationService, private loginService: LoginService) {}

  async ngOnInit() {
    
  }
  displayFn(individual?: Individuo): string | undefined {
    return individual ? individual.apodo : undefined;
  }
  async loginFriend() {
    try{
      await this.relationService.updateIndividual(this.candidateIndividualToAdd)
      this.individuos = await this.relationService.getFriendsOfIndividual()
   }catch(error){
     console.log("me rompi todo",error)
   }
   this.candidateIndividualToAdd = null
  }

  delete(individual: Individuo){
    _.remove(this.individualsNotAdded, individual)
  }

  disabledIndividual(){
    return this.candidateIndividualToAdd == null 
  }
}
