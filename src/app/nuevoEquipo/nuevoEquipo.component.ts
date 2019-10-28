import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Equipo, EquipoComplete } from '../domain/misequipos'
import { LoginService } from '../services/loginService/login.service';
import { Individuo, Entidad } from '../domain/Individuo';
import { TeamService } from '../services/typeRelationService/teamService/team.service';

@Component({
  selector: 'app-nuevoEquipo',
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NewEquipoComponent implements OnInit {

  members: Individuo[]
  team: EquipoComplete = new EquipoComplete
  constructor(private loginservice: LoginService, public dialogRef: MatDialogRef<NewEquipoComponent>, private teamService: TeamService, @Optional() @Inject(MAT_DIALOG_DATA) private data: EquipoComplete) { }
  async ngOnInit() {
    this.members = await this.teamService.getIndividuals()
    //TODO: en el service teamService falta hacer el metodo updateIndividual() una vez echo este metodo la linea de abajo deberia 
    //funcionar 
  }

  getUser() {
    return this.loginservice.getUser()
  }

  
  idTeam(){
  }

  cancelarNuevoEquipo() {
    //TODO: cuando cancele el usuario deberiamos hacer un rollback a la lista de integrantes debido a que el componente 
    //tyPeOfRelations hace put directemente al backend pero para hacer andar esto primero ahi que hacer el put comentado arriba
    this.dialogRef.close()
  }

  disableTeam() {
    return this.team.nombre == null || this.team.nombre == ''
  }

  //TODO: MUCHA SUERTEEEEEEEEEEEEE JAVIIIIIIIIIIII!!!!!

}
