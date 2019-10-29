import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Individuo, Entidad } from 'src/app/domain/Individuo';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/loginService/login.service';
import * as _ from 'lodash'
import { TypeRelationService } from 'src/app/services/typeRelationService/typeRelation.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-typeOfRelations',
  templateUrl: './typeOfRelations.component.html',
  styleUrls: ['./typeOfRelations.component.css']
})
export class TypeOfRelationsComponent implements OnInit {

  @Input() title: any
  @Input() typeRelationSerice: TypeRelationService
  @Output() individualToDelete:EventEmitter<Individuo>=new EventEmitter<Individuo>()
  @Output() individualToAdd:EventEmitter<Individuo>=new EventEmitter<Individuo>()
  @Input() individuos: Entidad[]

  @Input() individualsNotAdded: Entidad[]
  candidateIndividualToAdd: Entidad
  myControl = new FormControl(); 

  constructor(private loginService: LoginService, private snackBar: MatSnackBar) { }

  async ngOnInit() {

   // this.individualsNotAdded = await this.typeRelationSerice.getNonIndividuals()
  }

  error(errorType: string) {
    this.snackBar.open(errorType, 'x', {
      duration: 2000,
    });
  }
  async addIndividual() {
    try {
      await this.typeRelationSerice.updateIndividual(this.candidateIndividualToAdd)
      this.individuos.push(this.candidateIndividualToAdd)
      this.delete(this.candidateIndividualToAdd, this.individualsNotAdded)
      this.individualToAdd.emit(this.candidateIndividualToAdd)
    } catch  {
      this.error('Seleccione uno de la lista')
    }

    this.candidateIndividualToAdd = null
  }
  async deleteIndividual(individuodelete: Individuo) {
    try {
      await this.typeRelationSerice.deleteIndividual(individuodelete)
      this.delete(individuodelete, this.individuos)
      this.individualToDelete.emit(individuodelete)
    }
    catch (error) {
      console.log("se rombio el delete", error)
    }
  }
  delete(individual: Individuo, colecccionIndividual: Individuo[]) {
    _.remove(colecccionIndividual, individual)
  }

  displayFn(individual?: Individuo): string | undefined {
    return individual ? individual.apodo : undefined;
  }

  disabledIndividual() {
    return this.candidateIndividualToAdd == null
  }

}
