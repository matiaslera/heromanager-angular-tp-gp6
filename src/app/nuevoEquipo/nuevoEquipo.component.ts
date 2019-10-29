import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Equipo, EquipoComplete } from '../domain/misequipos'
import { LoginService } from '../services/loginService/login.service';
import { Individuo, Entidad } from '../domain/Individuo';
import { TeamService } from '../services/typeRelationService/teamService/team.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevoEquipo',
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NewEquipoComponent implements OnInit {
  noIntegrantes: Individuo[]
  team: EquipoComplete = new EquipoComplete 
  constructor(private loginservice: LoginService, public dialogRef: MatDialogRef<NewEquipoComponent>, private teamService: TeamService, @Optional() @Inject(MAT_DIALOG_DATA) private data: EquipoComplete) { }
  
  async ngOnInit() {
    this.dialogRef.disableClose = true;
    this.noIntegrantes = await this.teamService.getNonIndividuals(this.data.id)
    this.team = this.data
    console.log(this.data.lider)
  }

  disableTeam() {
    return (this.team.nombre == null || this.team.nombre == '') 
  }
  
}
