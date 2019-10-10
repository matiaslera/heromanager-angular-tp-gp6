import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Amigos } from '../domain/Amigos';
import { AmigosService } from '../services/amigosService/amigos.service';

@Component({
  selector: 'app-relaciones',
  templateUrl: './relaciones.component.html',
  styleUrls: ['./relaciones.component.css']
})
export class RelacionesComponent implements OnInit {

  amigos : Amigos[] = []
  
  constructor(public amigosService: AmigosService ) { 
  }
  
  
  ngOnInit() {
    this.amigosService.getData()
    .subscribe(
      amigo =>{
        this.amigos = amigo
      }
    )
  }

}
