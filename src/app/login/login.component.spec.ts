/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';

describe('LoginComponent', () => {
  let app: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule, MaterialModule, RouterTestingModule.withRoutes([]),],
      providers: [{
        provide: APP_BASE_HREF, useValue: '/home'
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy()
  }))


  it('form invalid when empty', () => {
    expect(app.loginForm.valid).toBeFalsy()
  })

  it('username field validity', () => {
    let itemUsername = app.loginForm.controls['username']
    expect(itemUsername.valid).toBeFalsy()

    let errors = {}
    errors = itemUsername.errors
    expect(errors['required']).toBeTruthy()
  })



  
  

});
