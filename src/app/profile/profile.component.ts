import { Component, OnInit } from '@angular/core';
import { Individuo } from '../domain/Individuo';
import { ProfileService } from '../services/profileService/profile.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/loginService/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData:Individuo 
  paramId = this.route.snapshot.params.id
  constructor(private profileService: ProfileService, private route: ActivatedRoute, private loginService:LoginService) { 
  }
  
   async ngOnInit() {
    if(this.paramId==null){
      this.paramId = this.loginService.getidUserLogged()
    }
    this.profileData = await this.profileService.getFullProfile(this.paramId)
  }

}
