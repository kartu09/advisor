import { Component } from '@angular/core';
import { User } from '../../interfaces/user/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: User[] | undefined;

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
