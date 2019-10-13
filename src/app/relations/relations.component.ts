import { Component, OnInit } from '@angular/core';
import { UserCredential } from '../services/loginService/login.service';
import { AmigosService } from '../services/amigosService/amigos.service';
import { Amigos } from '../domain/Amigos';

@Component({
  selector: 'app-relations',
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
  amigos : Array<Amigos> = []
  
  constructor(public amigosService: AmigosService) { 
  }
  

  async ngOnInit() {
    // this.amigosService.individuos()
    // .subscribe(
    //   amigo =>{
    //     this.amigos = amigo
    //   }
    // )
    this.amigos = await this.amigosService.individuos()
  }


}
