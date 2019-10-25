import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Usuario } from '../domain/usuario';
import { Equipo } from '../domain/misequipos'
import { EquiposService } from '../services/individuos/misequipos.service'
import { Router } from '@angular/router';
import { UsuariosService } from '../services/individuos/usuariosService'
import{FriendsService} from '../services/typeRelationService/friendsService/friends.service'
import { Individuo } from 'src/app/domain/Individuo';
import {HEROES} from '../services/individuos/Individuos.service'
import { LoginService } from '../services/loginService/login.service';

@Component({
  selector: 'app-nuevoEquipo',
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})
export class NewEquipoComponent implements OnInit {
  
  nombreEquipo:string;
  liderEquipo:Usuario;
  integrantes= [];
  propietario = this.getUser;

  equipo: Equipo;
  action: string;
  local_data: any;

  miFormulario = new FormControl();
  seleccionado: Usuario;
  

  constructor(private equipoService: EquiposService, private router: Router,private integranteFri: FriendsService,
    public dialogRef: MatDialogRef<NewEquipoComponent>, private loginService: LoginService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Equipo) {

    console.log(data);
    this.local_data = { ...data };
    this.action = this.local_data.action;
      }
      ngOnInit() {

      }

  mensajePrueba() {
    window.alert('El componente esta funcionando');
  }

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  navegarHome() {
    this.router.navigate(['/misequipos'])
  }

  seleccion(user:Usuario){
    this.seleccionado = user;
  }
  agregarIntegrante(name:string){
    this.integrantes.push(new Usuario(name));
      
  }

   esUnIntegrante(usuario:Usuario){
     return this.integrantes.includes(usuario)
 }
 eliminarIntegrante(usuario:Usuario){
     if (this.esUnIntegrante(usuario)) {
       return this.integrantes.splice(this.integrantes.indexOf(usuario), 1)
   }
   }
   getUser() {
    return this.loginService.getUser()
  }

  crearEquipo(){
    this.equipo.nombre= this.nombreEquipo
    this.equipo.integrantes= this.integrantes
    this.equipo.propietario=this.propietario()
    this.equipo.lider = this.liderEquipo
  }

}
