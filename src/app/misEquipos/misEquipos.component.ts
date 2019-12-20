import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Equipo, EquipoComplete } from '../domain/misequipos';
import * as _ from 'lodash'
import { Router } from '@angular/router'
import { MatDialog, MatTable, MatSnackBar } from '@angular/material';
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
  displayedColumns: string[] = ['nombre', 'lider', 'propietario', 'actions'];
  constructor(public teamService: TeamService, private router: Router,
    private loginService: LoginService, public dialog: MatDialog, private snackBar: MatSnackBar) {

  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; table: MatTable<Equipo>;

  ngOnInit() {
    this.getTeams()
  }

  async editarEquipo(equipoId: Equipo) {
    const dialogRef = this.dialog.open(NewEquipoComponent, {
      data: equipoId
    })
    dialogRef.afterClosed().subscribe(result => {
      if (result) { this.getTeams() }
    })
  }

  individuoEsAdmin(equipo: Equipo) {
    return equipo.isTheOwner(this.loginService.getUserLoggedId())
  }

  async getTeams() {
    try {
      this.equipos = await this.teamService.getAllTeams()
      this.dataSource = new MatTableDataSource<Equipo>(this.equipos)
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async eliminarEquipo(deleteTeam: Equipo) {
    await this.teamService.deleteTeam(deleteTeam.id)
    this.getTeams()
  }

  async abandonar(team: Equipo) {
    await this.teamService.abandonTeam(team.id)
    this.getTeams()
  }

  error(errorType: string) {
    this.snackBar.open(errorType, 'x', {
      duration: 2000,
    });
  }
}
