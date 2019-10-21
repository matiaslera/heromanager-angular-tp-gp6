import { Component, OnInit, Input, Output } from '@angular/core';
import { Individuo } from 'src/app/domain/Individuo';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/loginService/login.service';
import { RelationService } from 'src/app/services/relationsService/relation.service';

@Component({
  selector: 'app-typeOfRelations',
  templateUrl: './typeOfRelations.component.html',
  styleUrls: ['./typeOfRelations.component.css']
})
export class TypeOfRelationsComponent {

  @Input() title: any
  @Input() individuos: Individuo[]
  @Input() individualsNotAdded: Individuo[]
  candidateIndividualToAdd: Individuo = new Individuo
  myControl = new FormControl();


  loginFriend() {
    const individualFilter = this.individualsNotAdded.find(individualNotAdded => individualNotAdded.apodo == this.candidateIndividualToAdd.apodo)
    this.individuos.push(individualFilter)
  }


}
