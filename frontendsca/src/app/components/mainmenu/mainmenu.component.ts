import { Component } from '@angular/core';
import { Role } from 'src/app/enums/role';
import Usuario from 'src/app/interfaces/usuario/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TacticService } from 'src/app/services/tactic.service';
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
  allUsers: Usuario[] = [];

  currentUser: Usuario | undefined;

  constructor(private authService: AuthService, private userService: UserService, private tacticService: TacticService) {
    
    this.userAuthenticated = authService.isAuthenticated();
    this.connected = this.userAuthenticated;

  }

  ngOnInit() {
    
    this.tacticService.getAllUsers().subscribe((users: Usuario[]) => {
      console.log(users);
      this.allUsers = users;
      this.currentUser = users.find(usuario => usuario.email == this.authService.getCurrentUser().email);
    })
  }


  isAuthenticated() {
    return this.userAuthenticated == true;
  }

  logout() {
    this.authService.cerrarSesion();
  }
}
