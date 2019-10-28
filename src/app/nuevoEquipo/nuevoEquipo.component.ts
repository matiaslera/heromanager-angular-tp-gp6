import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Usuario } from '../domain/usuario';
import { Equipo, EquipoComplete } from '../domain/misequipos'
import { Router } from '@angular/router';
import { LoginService } from '../services/loginService/login.service';
import { Integrantes } from '../domain/integrantes';
import { Individuo, Entidad } from '../domain/Individuo';
import { TeamService } from '../services/typeRelationService/teamService/team.service';

@Component({
  selector: 'app-nuevoEquipo',
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NewEquipoComponent implements OnInit {

  members: Individuo[]
  candidateIndividualsForLeader: Individuo[]
  //TODO: estaria bueno que teamName y teamLeader esten dentro de equipo no lo hice porque nose porque pija no funciona si lo 
  //meto adentro jaja
  teamName: string
  teamLeader: Individuo
  team: EquipoComplete
  constructor(private loginservice: LoginService, public dialogRef: MatDialogRef<NewEquipoComponent>, private teamService: TeamService, @Optional() @Inject(MAT_DIALOG_DATA) private data: EquipoComplete) { }
  async ngOnInit() {
    this.members = await this.teamService.getIndividuals()
    //TODO: en el service teamService falta hacer el metodo updateIndividual() una vez echo este metodo la linea de abajo deberia 
    //funcionar 
    this.candidateIndividualsForLeader = await this.teamService.getNonIndividuals()
    this.teamName = this.data.nombre
  }

  getUser() {
    return this.loginservice.getUser()
  }

  agregarNuevoEquipo() {
    try {
      this.team = new EquipoComplete(this.data.id, this.teamName, this.loginservice.getidUserLogged(), this.loginservice.getUser(), this.teamLeader)
      this.teamService.updateTeam(this.team)
    }
    catch  {
      console.error('se rompio el put del api rest')
    }
    this.dialogRef.close()
  }

  idTeam(){
  }

  cancelarNuevoEquipo() {
    //TODO: cuando cancele el usuario deberiamos hacer un rollback a la lista de integrantes debido a que el componente 
    //tyPeOfRelations hace put directemente al backend pero para hacer andar esto primero ahi que hacer el put comentado arriba
    this.dialogRef.close()
  }

  disableTeam() {
    return this.teamName == null || this.teamName == ''
  }

  //TODO: MUCHA SUERTEEEEEEEEEEEEE JAVIIIIIIIIIIII!!!!!

}
