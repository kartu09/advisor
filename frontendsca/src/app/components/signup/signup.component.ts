import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user/user';
import { Role } from 'src/app/enums/Role';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  selectedRole: Role = Role.USER;
  usuario: User = new User();

  roles = [
    Role.USER,
    Role.ADMIN,
    Role.COACH
  ];

  constructor(private userService: UserService) {}

  registrar(){
    this.userService.newUser(this.usuario).subscribe(response => {
      console.log(response);
    });
  }
    
  
}
