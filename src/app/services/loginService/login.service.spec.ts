import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('UserLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService]
    })
  })

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy()
  }))
  
  it('el usuario puede ser logeado', inject([LoginService], (service: LoginService) => {
    service.authenticate('123', '123')
    expect(service.isAuthenticated()).toEqual(true)   
  }))

  it('el usuario No puede ser logeado', inject([LoginService], (service: LoginService) => {
    service.authenticate('hja', 'hola')
    expect(service.isAuthenticated()).toEqual(false)   
  }))
});
