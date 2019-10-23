import { Component, OnInit, Input } from '@angular/core';
import { Individuo } from 'src/app/domain/Individuo';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/loginService/login.service';
import * as _ from 'lodash'
import { TypeRelationService } from 'src/app/services/typeRelationService/typeRelation.service';
@Component({
  selector: 'app-typeOfRelations',
  templateUrl: './typeOfRelations.component.html',
  styleUrls: ['./typeOfRelations.component.css']
})
export class TypeOfRelationsComponent implements OnInit {

  @Input() title: any
  @Input() typeRelationSerice: TypeRelationService
  individuos: Individuo[]
  individualsNotAdded: Individuo[]
  candidateIndividualToAdd: Individuo
  myControl = new FormControl();

  constructor(private loginService: LoginService) { }

  async ngOnInit() {
    this.individuos = await this.typeRelationSerice.getIndividuals()
    this.individualsNotAdded = await this.typeRelationSerice.getNonIndividuals()

  }
  displayFn(individual?: Individuo): string | undefined {
    return individual ? individual.apodo : undefined;
  }
  async loginFriend() {
    try {
      await this.typeRelationSerice.updateIndividual(this.candidateIndividualToAdd)
      this.individuos = await this.typeRelationSerice.getIndividuals()
    } catch (error) {
      console.log("me rompi todo", error)
    }

    this.candidateIndividualToAdd = null
  }

  delete(individual: Individuo) {
    _.remove(this.individualsNotAdded, individual)
  }

  disabledIndividual() {
    return this.candidateIndividualToAdd == null
  }

  async deleteIndividual(individuodelete: Individuo) {
    try {
      await this.typeRelationSerice.deleteIndividual(individuodelete)
      this.individuos = await this.typeRelationSerice.getIndividuals()
    }
    catch (error) {
      console.log("se rombio el delete", error)
    }
  }
}
