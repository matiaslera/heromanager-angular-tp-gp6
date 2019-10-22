import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Usuario} from '../domain/usuario';
import {Equipo} from '../domain/misequipos'
import {EquiposService} from '../services/individuos/misequipos.service' 
import { Router } from '@angular/router';
import {MisEquiposComponent} from '../misEquipos/misEquipos.component'
  
export interface UsersData {
  name: string;
  id: number;
}
@Component({
  selector: 'app-nuevoEquipo' ,
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NewEquipoComponent implements OnInit {

  equipo:Equipo;
  misEquipo:MisEquiposComponent;
 individuos = individuos;
 action:string;
 local_data:any;

 constructor(private equipoService:EquiposService, private router:Router, 
   public dialogRef: MatDialogRef<NewEquipoComponent>,
   @Optional() @Inject(MAT_DIALOG_DATA) public data: EquiposService) {
   console.log(data);
   this.local_data = {...data};
   this.action = this.local_data.action;
   if(!this.equipo){
     this.navegarHome()
   }
    }

 doAction(){
   this.dialogRef.close({event:this.action,data:this.local_data});
 }

 closeDialog(){
   this.dialogRef.close({event:'Cancel'});
 }

  ngOnInit() {
   this.equipo.propietario = new Usuario(this.misEquipo.perfil) 
  }

  mensajePrueba(){
    window.alert('El componente esta funcionando');
  }
  
  navegarHome(){
    this.router.navigate(['/misequipos'])
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
