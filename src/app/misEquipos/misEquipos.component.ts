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
  dataSource: MatTableDataSource<Equipo>
  equipoSelec: Equipo = new Equipo
  displayedColumns: string[] = ['nombre', 'lider', 'propietario', 'actions'];
  constructor(public teamService: TeamService, private router: Router,
    private loginService: LoginService, public dialog: MatDialog) {

  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; table: MatTable<Equipo>;

   ngOnInit() {
    try {
      this.getTeams()
    } catch (error) {
      mostrarError(this, error)
    }
  }
  getUser() {
    return this.loginService.getUser()
  }
  async editarEquipo(equipo: String) {
    const dialogRef = this.dialog.open(NewEquipoComponent, {
      data: equipo //await this.teamService.getFullTeam(equipo),
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.actualizar()
      }
    })
  }
  async actualizar() {
    this.getTeams()
  }
  individuoEsAdmin(individuo: string) {
    return individuo == this.loginService.getUserLoggedId()//TODO: comportamiento del equipo
  }
  async getTeams() {
    this.equipos = await this.teamService.getAllTeams()
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
