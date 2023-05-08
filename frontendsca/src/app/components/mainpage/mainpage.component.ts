import { Component } from '@angular/core';
import { Role } from 'src/app/enums/Role';
import { User } from 'src/app/interfaces/user/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  public user: User = {
    username: 'carlos',
    name: 'Carlos',
    dateOfBirth: '09/11/1198',
    // role: Role.USER,
    role: Role.USER,
    email: 'carlos@elca.ch',
    password: '',
    // creationDate: new Date()
  }
  private users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser(1).subscribe(user=> {
      console.log('Obteniendo usuario 1', user);
      this.user = user;
    })

    this.userService.getAll().subscribe((data: User[]) => {
      this.users = data;
      console.log(data);
    });
  }

}
