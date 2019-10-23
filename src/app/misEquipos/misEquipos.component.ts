import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Equipo } from '../domain/misequipos';
import { EquiposService } from '../services/individuos/misequipos.service';
import { Router } from '@angular/router'
import { MatDialog, MatTable } from '@angular/material';
import { NewEquipoComponent } from '../nuevoEquipo/nuevoEquipo.component'
import { Usuario } from '../domain/usuario'

function mostrarError(component, error) {
  console.log('error', error)
  component.errors.push(error.error)
}

@Component({
  selector: 'app-misEquipos',
  templateUrl: './misEquipos.component.html',
  styleUrls: ['./misEquipos.component.css']
})
export class MisEquiposComponent implements OnInit {

  equipos: Array<Equipo> = []
  errors = [];
  dataSource: MatTableDataSource<Equipo>;
  perfil = 'Batman';

  displayedColumns: string[] = ['nombre', 'lider', 'propietario', 'actions', 'eliminar'];
  constructor(public equiposService: EquiposService, private router: Router, public dialog: MatDialog) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  async ngOnInit() {

    console.log(this.dataSource);
    try {
      // Truco para que refresque la pantalla
      console.log('error en init')
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.equipos = await this.equiposService.todosLosEquipos()
      this.dataSource = new MatTableDataSource<Equipo>(this.equipos);
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async abandonar(equipo: Equipo) {
    console.log(equipo)
    try {
      console.log(equipo)
      equipo.eliminarIntregrante(this.perfil)
      await this.equiposService.actualizarEquipo(equipo)
    } catch (error) {
      mostrarError(this, error)
    }
  }

  async eliminarEquipo(equipo: Equipo) {
    try {
      this.equiposService.eliminarEquipo(equipo)
      await  this.equiposService.actualizarEquipo(equipo)
    } catch (error) {
      mostrarError(this, error)
    }
  }
  
  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(NewEquipoComponent, {
      width: '800px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
    var d = new Date();
    var a = new Usuario('matias');
    this.equiposService.actualizarEquipo(row_obj = new Equipo
      (4, 'algo', a, a, [])
    );
    this.table.renderRows();

  }
  updateRowData(row_obj) {
    this.equipos = this.equipos.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.nombre = row_obj.nombre;
      }
      return true;
    });
  }
  deleteRowData(row_obj) {
    this.equipos = this.equipos.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }


}
