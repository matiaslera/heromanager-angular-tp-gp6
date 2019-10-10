/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AmigosService } from './amigos.service';

describe('Service: Amigos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AmigosService]
    });
  });

  it('should ...', inject([AmigosService], (service: AmigosService) => {
    expect(service).toBeTruthy();
  }));
});
