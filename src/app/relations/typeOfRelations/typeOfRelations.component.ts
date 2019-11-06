import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Individuo,} from 'src/app/domain/Individuo';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/loginService/login.service';
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
  individuos: Individuo[]
  individualsNotAdded: Individuo[]
  myControl = new FormControl(); 

  constructor(private loginService: LoginService, private snackBar: MatSnackBar) { }

  async ngOnInit() {
    this.updateLists()
  }

  error(errorType: string) {
    this.snackBar.open(errorType, 'x', {
      duration: 2000,
    });
  }
  async addIndividual() {
    try {
      await this.typeRelationSerice.updateIndividual(this.myControl.value)
    } catch  {
      this.error('Seleccione uno de la lista')
    }
    this.myControl.setValue(null)
    this.updateLists()
  }

  async deleteIndividual(individuodelete: Individuo) {
    try {
      await this.typeRelationSerice.deleteIndividual(individuodelete)
    }
    catch (error) {
      console.log("Error al borrar", error)
    }
    this.updateLists()
  }
  
  async updateLists(){//refresh
    this.individuos = await this.typeRelationSerice.getIndividuals()
    this.individualsNotAdded = await this.typeRelationSerice.getNonIndividuals()
  }
  
  displayFn(individual?: Individuo): string | undefined {
    return individual ? individual.apodo : undefined;
  }

  cantAddFriend() {
    return this.myControl.value == null
  }

}
