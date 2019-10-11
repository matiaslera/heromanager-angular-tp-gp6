import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEquipoComponent } from './nuevoEquipo.component';

describe('NewEquipoComponent', () => {
  let component: NewEquipoComponent;
  let fixture: ComponentFixture<NewEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
