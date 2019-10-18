/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnemigosService } from './enemigos.service';

describe('Service: Enemigos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnemigosService]
    });
  });

  it('should ...', inject([EnemigosService], (service: EnemigosService) => {
    expect(service).toBeTruthy();
  }));
});
