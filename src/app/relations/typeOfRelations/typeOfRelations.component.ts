import { Component, OnInit, Input } from '@angular/core';
import { Individuo } from 'src/app/domain/Individuo';
import { FormControl } from '@angular/forms';
import { LoginService } from 'src/app/services/loginService/login.service';
import { RelationService } from 'src/app/services/relationsService/relation.service';

@Component({
  selector: 'app-typeOfRelations',
  templateUrl: './typeOfRelations.component.html',
  styleUrls: ['./typeOfRelations.component.css']
})
export class TypeOfRelationsComponent implements OnInit {

  @Input() title: any
  @Input() individuos: Individuo[]
  allIndividuals : Individuo[]
  myControl = new FormControl();
  constructor(private relationService: RelationService, private loginService: LoginService){}
 
  async ngOnInit() {
    this.allIndividuals = await this.relationService.getAllIndividuals(this.loginService.getidUserLogged())
  }


}
