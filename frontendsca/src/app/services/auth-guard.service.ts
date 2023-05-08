import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (localStorage.getItem('authenticated') === 'true') {
      
      // user is authenticated
      return true;
    } else {
      // user is not authenticated, redirect to login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}