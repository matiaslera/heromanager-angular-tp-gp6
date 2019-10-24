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
  perfil= new Usuario ('Batman');

  displayedColumns: string[] = ['nombre', 'lider', 'propietario', 'actions', 'eliminar'];
  constructor(public equiposService: EquiposService, private router: Router, public dialog: MatDialog) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  async ngOnInit() {
    try {
      // this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.equipos = await this.equiposService.todosLosEquipos()
      this.dataSource = new MatTableDataSource<Equipo>(this.equipos);
    } catch (error) {
      mostrarError(this, error)
    }
    console.log(this.equipos)
  }

  async actualizarDato(){
    try{this.equipos = await this.equiposService.todosLosEquipos()
    this.dataSource = new MatTableDataSource<Equipo>(this.equipos);}
    catch(error){
      mostrarError(this, error)
    }
  }
  async abandonar(equipo: Equipo) {
    try {
      console.log(equipo)
       equipo.eliminarIntregrante(this.perfil.nombre)
      //  const alto= this.equipos.splice(this.equipos.indexOf(equipo), 1)
      //  return  this.dataSource = new MatTableDataSource<Equipo>(alto);
      } catch (error) {
      mostrarError(this, error)
    }
    console.log(equipo)
  }
  eliminar(elemento) {
  this.dataSource.data = this.dataSource.data.filter(i => i !== elemento)
  // .filter(i => i !== elemento)
//  .map((i, idx) => (id.Equipo = (idx + 1), i)); // Update the position

}

  async eliminarEquipo(equipo: Equipo) {
    try {
      if (this.equipos.includes(equipo)) {
        const alto= this.equipos.splice(this.equipos.indexOf(equipo), 1)
        return  this.dataSource = new MatTableDataSource<Equipo>(alto);
    }
      // this.equiposService.eliminarEquipo(equipo)
      // await  this.equiposService.actualizarEquipo(equipo)
    } catch (error) {
      mostrarError(this, error)
    }
    console.log(equipo)
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
