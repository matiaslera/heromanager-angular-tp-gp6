import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Equipo, EquipoComplete } from '../domain/misequipos';
import * as _ from 'lodash'
import { Router } from '@angular/router'
import { MatDialog, MatTable } from '@angular/material';
import { NewEquipoComponent } from '../nuevoEquipo/nuevoEquipo.component'
import { LoginService } from '../services/loginService/login.service';
import { TeamService } from '../services/typeRelationService/teamService/team.service';


function mostrarError(component, error) {
  component.errors.push(error.error)
}

@Component({
  selector: 'app-misEquipos',
  templateUrl: './misEquipos.component.html',
  styleUrls: ['./misEquipos.component.css']
})
export class MisEquiposComponent implements OnInit {

  equipos: Equipo[] 
  dataSource: MatTableDataSource<Equipo>;
  equipoSelec: Equipo;
  displayedColumns: string[] = ['nombre', 'lider', 'propietario', 'actions'];
  constructor(public teamService: TeamService, private router: Router,
    private loginService: LoginService, public dialog: MatDialog) {

  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; table: MatTable<Equipo>;

  async ngOnInit() {
    try {
      this.getTeams()
    } catch (error) {
      mostrarError(this, error)
    }
  }
  getUser() {
    return this.loginService.getUser()
  }
  nuevoEquipo() {
    const dialogRef = this.dialog.open(NewEquipoComponent, {
      data: new EquipoComplete()
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result != "no") {
        this.agregar(result)
      }
    })
  }
  async editarEquipo(equipo: string) {
    const dialogRef = this.dialog.open(NewEquipoComponent, {
      data: await this.teamService.getFullTeam(equipo),
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result != "no") {
        this.actualizar(result)
      }
    })
  }
  async actualizar(equipo: EquipoComplete) {
    await this.teamService.updateTeam(equipo)
    this.getTeams()
  }
  async agregar(nuevoEquipo: EquipoComplete) {
    nuevoEquipo.owner = this.getUser()
    await this.teamService.addTeam(nuevoEquipo)
    this.getTeams()
  }
  individuoEsAdmin(individuo: string) {
    return individuo == this.loginService.getidUserLogged()
  }
  async getTeams() {
    this.equipos = await this.teamService.getAllTeam()
    this.dataSource = new MatTableDataSource<Equipo>(this.equipos)
  }
  async eliminarEquipo(deleteTeam: EquipoComplete){
    await this.teamService.deleteTeam(deleteTeam.id)
    this.getTeams()
  }
  async abandonar(team: EquipoComplete){
    await this.teamService.abandonTeam(team.id)
    this.getTeams()
  }
}
