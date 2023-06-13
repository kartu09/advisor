import { Component } from '@angular/core';
import { Role } from 'src/app/enums/role';
import { UserService } from '../../services/user.service';
import User from 'src/app/interfaces/usuario/Usuario';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  public user: User = {
    role: Role.USER,
    email: 'carlos@elca.ch',
    password: ''
  }
  private users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {

    this.userService.getAll().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

}
