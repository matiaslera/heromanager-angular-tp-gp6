import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface Equipo {
  name: string;
  lider: string;
  propietario: string;
}

const ELEMENT_DATA: Equipo[] = [
  { name: 'Justicie League', lider: 'H', propietario: 'Superman'},
  { name: 'Justicie League', lider: 'He',propietario: 'Superman'},
  { name: 'Los galacticos', lider: 'Li',propietario: 'Batman'},
  { name: 'Los vengadores', lider: 'Be',propietario: 'Batman'},
  { name: 'Insurgency', lider: 'B',propietario: 'Batman'},
  { name: 'Insurgency',   lider: 'C',propietario: 'Spiderman'},
  { name: 'Insurgency',   lider: 'N',propietario: 'Spiderman'},
];

@Component({
  selector: 'app-misEquipos',
  templateUrl: './misEquipos.component.html',
  styleUrls: ['./misEquipos.component.css']
})
export class MisEquiposComponent implements OnInit{
  displayedColumns: string[] = [ 'name', 'lider', 'propietario'];
  dataSource = new MatTableDataSource<Equipo>(ELEMENT_DATA);

  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}