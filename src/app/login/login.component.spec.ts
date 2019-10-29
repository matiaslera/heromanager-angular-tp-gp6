import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { RouterTestingModule, } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {LoginService} from '../services/loginService/login.service'
import {StubLogin} from '../services/loginService/StubLogin.services'

import { LoginComponent } from './login.component';

describe('Test de LoginComponent', () => {
  let app: LoginComponent;
  let fixture;


  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule,BrowserAnimationsModule,
         MaterialModule, RouterTestingModule.withRoutes([]),HttpClientTestingModule],
      providers: [{
        provide: APP_BASE_HREF, useValue: '/'
      }]
    }).compileComponents();

    TestBed.overrideComponent(LoginComponent,{
      set:{
        providers:[
           {
          provide: LoginService, useClass: StubLogin 
           }
        ]
      }
    })

    fixture=TestBed.createComponent(LoginComponent)
    fixture.detectChanges() 
    await fixture.whenStable()
   fixture.detectChanges() 
    app=fixture.componentInstance
  
  })

  it('debe crear correctamente la aplicación', async(() => {
  expect(app).toBeTruthy()
}))

  it('form invalid when empty',  async(()  => {
    expect(app.loginForm.valid).toBeFalsy()
  }))

  it('username field validity',  async(()  => {
    let itemUsername = app.loginForm.controls['username']
    expect(itemUsername.valid).toBeFalsy()

    let errors = {}
    errors = itemUsername.errors
    expect(errors['required']).toBeTruthy()
  }))

});

