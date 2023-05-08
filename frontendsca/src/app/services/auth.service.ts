import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../enums/Role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;
  private currentUser: { username: string, role: Role, authenticated: boolean } = { username: 'CARLOS', role: Role.USER , authenticated: false};

  constructor() { 
    // check if user is authenticated

    if (localStorage.getItem('authenticated') === 'true') {
      this.authenticated = true;
    }
  }

  isLogged(){
    return this.currentUser.authenticated;
  }

  changeLogged(){
    if(this.currentUser.authenticated === true) {
      this.currentUser.authenticated = false;
    }
    
    if(this.currentUser.authenticated === false) {
      this.currentUser.authenticated = true;
    }
    console.log("User now is authenticated: " + this.currentUser.authenticated)
  }


  logout() {
    // clear authentication flag and redirect to login page
    localStorage.removeItem('authenticated');
    this.authenticated = false;
    // redirect to login page
    window.location.href = '/login';
  }

  setCurrentUser(username: string, role: Role, authenticated: boolean) {
    this.currentUser = { username, role , authenticated};
  }

  getCurrentUser(): { username: string, role: Role , authenticated: boolean} {
    return this.currentUser;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  isAdmin(): boolean {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }

  isCoach(): boolean {
    return this.currentUser && this.currentUser.role === Role.COACH;
  }

  isUser(): boolean {
    return this.currentUser && this.currentUser.role === Role.USER;
  }
}
