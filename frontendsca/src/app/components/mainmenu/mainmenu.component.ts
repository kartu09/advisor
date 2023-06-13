import { Component } from '@angular/core';
import { Role } from 'src/app/enums/role';
import Usuario from 'src/app/interfaces/usuario/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent {
  connected: boolean = false;
  role: Role = Role.USER;
  isAdmin: boolean = false;
  isCoach: boolean = false;
  userAuthenticated: boolean;

  currentUser: Usuario = {
    email: '',
  };

  constructor(private authService: AuthService, private userService: UserService) {
    
    this.userAuthenticated = authService.isAuthenticated();
    this.connected = this.userAuthenticated;

  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    console.log('USUARIO ACTUAL');
    this.currentUser =  this.authService.getCurrentUser();
    console.log(this.currentUser);
  }


  isAuthenticated() {
    return this.userAuthenticated == true;
  }

  logout() {
    this.authService.cerrarSesion();
  }

  /* toggleConnection() {
    //this.connected = !this.connected;
    this.authService.changeLogged();
    this.connected = !this.connected;
  } */

  /* changeRole() {
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
  } */
}
