import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/loginService/login.service';
import { Individuo } from '../domain/Individuo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData:Individuo
  constructor(private userLogService: LoginService) { 
  }
  
  ngOnInit() {
    this.profileData=this.userLogService.getUser()
  }

}
