/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { RouterTestingModule, } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TypeOfRelationsComponent } from './typeOfRelations.component';

describe('TypeOfRelationsComponent', () => {
  let component: TypeOfRelationsComponent;
  let fixture: ComponentFixture<TypeOfRelationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfRelationsComponent ],
      imports: [FormsModule, ReactiveFormsModule,BrowserAnimationsModule,
        MaterialModule, RouterTestingModule.withRoutes([]),HttpClientTestingModule],
     providers: [{
       provide: APP_BASE_HREF, useValue: '/'
     }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
