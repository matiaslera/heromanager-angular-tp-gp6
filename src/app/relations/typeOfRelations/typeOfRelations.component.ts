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
  individualsNotAdded: Individuo[]
  candidateIndividualToAdd: Individuo = new Individuo
  myControl = new FormControl();

  constructor(private relationService: RelationService, private loginService: LoginService) {}


  async ngOnInit() {
    this.individualsNotAdded = await this.relationService.getNoFriendIndividuals()
    const individualUserFilter = this.individualsNotAdded.find(individualUserId => (individualUserId.id == this.loginService.getidUserLogged()))
    this.delete(individualUserFilter)
  }

  loginFriend() {
    const individualFilter = this.individualsNotAdded.find(individualNotAdded => (individualNotAdded.apodo == this.candidateIndividualToAdd.apodo))
    this.individuos.push(individualFilter)
    this.delete(individualFilter)
    this.candidateIndividualToAdd = new Individuo
  }

  delete(individual: Individuo){
    _.remove(this.individualsNotAdded, individual)
  }

}
