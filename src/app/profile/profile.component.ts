import { Component, OnInit } from '@angular/core';
import { Individuo } from '../domain/Individuo';
import { ProfileService } from '../services/profileService/profile.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/loginService/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: Observable<{}>
  constructor(private profileService: ProfileService, private route: ActivatedRoute, private loginService: LoginService) {
  }
  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.loadProfile(routeParams.id)      
    })
  }
  async loadProfile(id:String){
    this.profileData = await this.profileService.getFullProfile(id)
  }

}
