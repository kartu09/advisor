import { Component } from '@angular/core';
import { User } from '../../interfaces/user/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  user: User[] | undefined;

  constructor(private userService: UserService | undefined){}

  ngOnInit(): void {
    this.userService.getAll.subscribe(
      u=>{
        this.user = u;
        console.log(u);
      }
    )
    console.log(this.user);
  }
}
