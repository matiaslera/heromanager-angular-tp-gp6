/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypeRelationService } from './typeRelation.service';

describe('Service: TypeRelation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeRelationService]
    });
  });

  it('should ...', inject([TypeRelationService], (service: TypeRelationService) => {
    expect(service).toBeTruthy();
  }));
});
