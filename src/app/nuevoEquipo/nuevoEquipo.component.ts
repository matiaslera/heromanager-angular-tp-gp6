import { Component, OnInit } from '@angular/core';
import { IndividuoService } from 'src/app/services/individuos/Individuos.service';
@Component({
  selector: 'app-nuevoEquipo' ,
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NewEquipoComponent implements OnInit {

 individuos = individuos;

  constructor() { }

  ngOnInit() {
   
  }

  mensajePrueba(){
    window.alert('El componente esta funcionando');
  }


}
export const individuos = [
  {
    name: ' Hulk',
    description: ' Es verde'
  },
  {
    name: 'Superman',
    description: 'Sabe volar'
  },
  {
    name: 'Spider-Man',
    description: 'Le gusta las arañas'
  }
];
export class Hero {
  id: number;
  name: string;
}

