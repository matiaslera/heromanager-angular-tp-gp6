import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Individuo,} from 'src/app/domain/Individuo';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/loginService/login.service';
import * as _ from 'lodash'
import { TypeRelationService } from 'src/app/services/typeRelationService/typeRelation.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-typeOfRelations',
  templateUrl: './typeOfRelations.component.html',
  styleUrls: ['./typeOfRelations.component.css']
})
export class TypeOfRelationsComponent implements OnInit {

  @Input() title: String
  @Input() typeRelationSerice: TypeRelationService
  @Input() individuos: Individuo[]
  @Input() individualsNotAdded: Individuo[]
  candidateIndividualToAdd: Individuo
  myControl = new FormControl(); 

  constructor(private loginService: LoginService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.individuos = await this.typeRelationSerice.getIndividuals()
    this.individualsNotAdded = await this.typeRelationSerice.getNonIndividuals()

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
    } catch  {
      this.error('Seleccione uno de la lista')
    }
    this.candidateIndividualToAdd = null
  }
  async deleteIndividual(individuodelete: Individuo) {
    try {
      await this.typeRelationSerice.deleteIndividual(individuodelete)
      this.individualsNotAdded.push(individuodelete)
      this.delete(individuodelete, this.individuos)
    }
    catch (error) {
      console.log("Error al borrar", error)
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
