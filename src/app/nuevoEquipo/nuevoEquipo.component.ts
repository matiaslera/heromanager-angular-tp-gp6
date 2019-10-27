import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Usuario } from '../domain/usuario';
import { Equipo } from '../domain/misequipos'
import { Router } from '@angular/router';
import { LoginService } from '../services/loginService/login.service';
import { Integrantes } from '../domain/integrantes';
import { Individuo } from '../domain/Individuo';
import { TeamService } from '../services/typeRelationService/teamService/team.service';

@Component({
  selector: 'app-nuevoEquipo',
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NewEquipoComponent implements OnInit {

  nombreEquipo: string
  liderEquipo: Individuo
  integrantes: Individuo[]
  allIntegrante: Individuo[]
  propietario = this.getUser
  equipo: Equipo;
  action: string;
  local_data: any;
  miFormulario = new FormControl();

  constructor(private teamService: TeamService,
    public dialogRef: MatDialogRef<NewEquipoComponent>, private loginService: LoginService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Equipo) {

    this.local_data = { ...data };
    this.action = this.local_data.action;
  }
  async ngOnInit() {
    this.integrantes = await this.teamService.getIndividuals()

  }


  agregarNuevoEquipo() {
    this.action = 'Nuevo';
    this.crearEquipo()
    this.dialogRef.close({ event: this.action, data: this.equipo });
  }

  cancelarNuevoEquipo() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  agregarIntegrante(integrente: Individuo) {
    this.integrantes.push(integrente);
  }
  getUser() {
    return this.loginService.getUser()
  }

  crearEquipo() {
    this.equipo = new Equipo(null, this.nombreEquipo, this.liderEquipo, this.propietario(), this.integrantes)
  }

  disabledIndividual() {
    return this.nombreEquipo == null
  }


}
