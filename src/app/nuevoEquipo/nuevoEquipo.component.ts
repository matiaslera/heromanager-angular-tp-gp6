import { Component, Inject, Optional, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EquipoComplete } from '../domain/misequipos'
import { LoginService } from '../services/loginService/login.service';
import { TeamService } from '../services/typeRelationService/teamService/team.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevoEquipo',
  templateUrl: './nuevoEquipo.component.html',
  styleUrls: ['./nuevoEquipo.component.css']
})

export class NewEquipoComponent implements OnInit {
  
  team: EquipoComplete 
  integranteFormControl = new FormControl('', Validators.required)
  constructor(private loginservice: LoginService, public dialogRef: MatDialogRef<NewEquipoComponent>, private teamService: TeamService, @Optional() @Inject(MAT_DIALOG_DATA) private data: string) { }

  async ngOnInit() {
    this.dialogRef.disableClose = true;
    await this.teamService.getFullTeam(this.data)
    this.team = this.teamService.getSelectedTeam()
  }

  cantSaveChanges() {
    return (this.team.nombre == null || this.team.nombre == '') || this.team.lider == null
  }
  
  guardarCambios() {
    this.teamService.updateTeam()
  }
}
