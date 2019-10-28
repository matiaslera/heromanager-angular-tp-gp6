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
  }
  
  disableTeam() {
    return this.team.nombre == null || this.team.nombre == ''
  }
  eliminarIntegrante(borrado:Individuo){
    this.team.eliminarIntegrante(borrado)
  }
  agregarIntegrante(agregado:Individuo){
    this.team.agregarIntegrante(agregado)
  }
  
}
