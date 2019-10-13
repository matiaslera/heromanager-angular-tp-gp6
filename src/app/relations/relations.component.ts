import { Component, OnInit } from '@angular/core';
import { AmigosService } from '../services/amigosService/amigos.service';
import { Individuo } from '../domain/Individuo';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
  amigos : Array<Individuo> = []
  
  constructor(public amigosService: AmigosService) { 
  }
  

  async ngOnInit() {
    this.amigos = await this.amigosService.individuos()
  }


}
