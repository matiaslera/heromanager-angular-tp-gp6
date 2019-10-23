/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnemiesService } from './enemies.service';

describe('Service: Enemies', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnemiesService]
    });
  });

  it('should ...', inject([EnemiesService], (service: EnemiesService) => {
    expect(service).toBeTruthy();
  }));
});
