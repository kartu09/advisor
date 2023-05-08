import { Component } from '@angular/core';
import { Role } from 'src/app/enums/Role';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent {
  authenticated: boolean;
  connected: boolean = false;
  role: Role = Role.USER;
  isAdmin: boolean = false;
  isCoach: boolean = false;

  currentUser: { username: string, role: Role, authenticated: boolean };

  constructor(private authService: AuthService) {
    this.authenticated =  this.connected;
    this.currentUser = this.authService.getCurrentUser();
  }


  isAuthenticated() {
    return this.authenticated == true;
  }

  logout() {
    //this.authService.logout();
    this.authService.changeLogged();
    this.connected = false;
  }

  toggleConnection() {
    //this.connected = !this.connected;
    this.authService.changeLogged();
    this.connected = !this.connected;
  }

  changeRole() {
    switch (this.role) {
      case Role.USER:
        this.role = Role.ADMIN;
        this.authService.setCurrentUser("ADMIN", Role.ADMIN, this.connected);
        this.isAdmin = true;
        this.isCoach = false;

        break;
      case Role.ADMIN:
        this.role = Role.COACH;
        this.authService.setCurrentUser("COACH", Role.COACH, this.connected);
        this.isAdmin = false;
        this.isCoach = true;
        break;
      case Role.COACH:
        this.role = Role.USER;
        this.authService.setCurrentUser("USER", Role.USER, this.connected);
        this.isAdmin = false;
        this.isCoach = false;
        break;
    }
  }
}
