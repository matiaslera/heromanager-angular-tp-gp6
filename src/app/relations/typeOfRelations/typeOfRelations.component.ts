import { Component, OnInit, Input } from '@angular/core';
import { UserCredential } from 'src/app/services/loginService/login.service';
import { AmigosService } from 'src/app/services/amigosService/amigos.service';
import { Individuo } from 'src/app/domain/Individuo';

@Component({
  selector: 'app-typeOfRelations',
  templateUrl: './typeOfRelations.component.html',
  styleUrls: ['./typeOfRelations.component.css']
})
export class TypeOfRelationsComponent implements OnInit {

  @Input() title: any
  @Input() amigos: Individuo[]

   
  // constructor(public amigosService: AmigosService) { 
  // }

  // amigosdiferentes: UserCredential[] = [
  //   {username: 'javi', password:'123'},
  //   {username: 'nico', password:'123'},
  //   {username: 'mati', password:'123'}
  // ];
  
  
 ngOnInit() {
  //   this.amigosService.getData()
  //   .subscribe(
  //     amigo =>{
  //       this.amigos = amigo
  //     }
  //   )
   }


}
