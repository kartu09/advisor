import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import Usuario from 'src/app/interfaces/usuario/Usuario';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: Usuario[] | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();

  }

  getAllUsers(): void {
    this.userService.getAll().subscribe(
      u=>{
        this.users = u;
        console.log(u);
      }
    )
    console.log(this.users);
  }

}
