import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/enums/role';
import { AuthService } from 'src/app/services/auth.service';
import Usuario from 'src/app/interfaces/usuario/Usuario';
import { TacticService } from 'src/app/services/tactic.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  selectedRole: Role = Role.USER;
  usuario: Usuario = {
    email: '',
    role: Role.USER,
    password: ''
  };

  roles = [
    Role.USER,
    Role.ADMIN,
    Role.COACH
  ];

  constructor(private authService: AuthService, private tacticService: TacticService) {}

  async registrar(user: Usuario){
    console.log(user);
    if (user.email != null && user.password && user.role){
      this.tacticService.createUser(user);
      const response = await this.authService.registerUser(user.email, user.password, user.role);
      console.log(response);
      //
    }
    else {
      console.log('No se puede registrar porque alguna propiedad es null o undefined')
    }
    
    
  }


}
