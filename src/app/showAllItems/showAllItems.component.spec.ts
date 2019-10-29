/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { RouterTestingModule, } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ShowAllItemsComponent } from './showAllItems.component';

describe('ShowAllItemsComponent', () => {
  let component: ShowAllItemsComponent;
  let fixture: ComponentFixture<ShowAllItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllItemsComponent ],
      imports: [FormsModule, ReactiveFormsModule,
        MaterialModule, RouterTestingModule.withRoutes([]),HttpClientTestingModule],
     providers: [{
       provide: APP_BASE_HREF, useValue: '/'
     }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
