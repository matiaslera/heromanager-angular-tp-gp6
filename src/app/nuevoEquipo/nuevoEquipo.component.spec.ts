import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { RouterTestingModule, } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog'

import { NewEquipoComponent } from './nuevoEquipo.component';
import {TypeOfRelationsComponent} from '../relations/typeOfRelations/typeOfRelations.component'

describe('NewEquipoComponent', () => {
  let component:NewEquipoComponent;
  let fixture;
  
  beforeEach(async( () => {
    TestBed.configureTestingModule({
      declarations: [ NewEquipoComponent,TypeOfRelationsComponent ],
      imports: [FormsModule, ReactiveFormsModule,BrowserAnimationsModule,MaterialModule, MatDialogRef,
        RouterTestingModule.withRoutes([]),HttpClientTestingModule,MatDialogModule],
            providers: [{
              provide: APP_BASE_HREF, useValue: '/'
            }]
          }).compileComponents();
        }));
    TestBed.overrideComponent(NewEquipoComponent,{
      set:{
        providers:[
           {provide: NewEquipoComponent} ] }
    })
      
    beforeEach(() => {
      fixture = TestBed.createComponent(NewEquipoComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  
  // it('debe crear correctamente la aplicación', async(() => {
  //   expect(component).toBeTruthy()}
  //   ))

  });
