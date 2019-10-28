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
  integrantes: Individuo[]
  Equipo: EquipoComplete
  constructor(public dialogRef: MatDialogRef<NewEquipoComponent>,private teamService: TeamService, @Optional() @Inject(MAT_DIALOG_DATA) public data: Equipo){}
  async ngOnInit() {
    this.integrantes= await this.teamService.getIndividuals()
  }

  agregarNuevoEquipo(){
      this.teamService.updateTeam(Equipo)
      this.dialogRef.close()
  }
}
