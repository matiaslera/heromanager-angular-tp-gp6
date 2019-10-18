import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Equipo } from '../domain/misequipos';
import { EquiposService } from '../../app/services/individuos/misequipos.service';
import { Router } from '@angular/router'

function mostrarError(component, error) {
  console.log('error', error)
  component.errors.push(error.error)
}

@Component({
  selector: 'app-misEquipos',
  templateUrl: './misEquipos.component.html',
  styleUrls: ['./misEquipos.component.css']
})
export class MisEquiposComponent implements OnInit{

  equipos: Array<Equipo> = []
  errors = [];
  dataSource:MatTableDataSource<Equipo>;
  perfil ='Batman';

  displayedColumns: string[] = [ 'nombre', 'lider', 'propietario'];
  constructor(public equiposService: EquiposService, private router: Router) { }

 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

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

  
  // async cumplir(tarea: Tarea) {
  //   try {
  //     tarea.cumplir()
  //     await this.tareasService.actualizarTarea(tarea)
  //   } catch (error) {
  //     mostrarError(this, error)
  //   }
  // }

  // async desasignar(tarea: Tarea) {
  //   try {
  //     tarea.desasignar()
  //     this.tareasService.actualizarTarea(tarea)
  //   } catch (error) {
  //     mostrarError(this, error)
  //   }
  // }

  // asignar(tarea: Tarea) {
  //   this.router.navigate(['/asignarTarea', tarea.id])
  // }

}
