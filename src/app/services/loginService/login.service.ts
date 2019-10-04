import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private authenticated: boolean
  private registeredUsers: UserCredential[] = []


  constructor() {
    this.authenticated = false
    this.registeredUsers.push({
      username: '123',
      password: '123'
    })
  }

  authenticate(username:string, password:string) {
    this.authenticated = this.registeredUsers.some(user => ((user.username == username ) && (user.password == password)))
  }

  isAuthenticated() {
    return this.authenticated
  }

}

interface UserCredential {
  username: string
  password: string
}
