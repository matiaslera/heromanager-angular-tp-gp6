import { Component, OnInit } from '@angular/core';
import { Individuo } from '../domain/Individuo';
import { ProfileService } from '../services/profileService/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData:Individuo 
  constructor(private profileService: ProfileService) { 
    
  }
  
   async ngOnInit() {
    this.profileData = await this.profileService.getFullProfile()
  }

}
