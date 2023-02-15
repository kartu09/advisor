import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string | undefined;
  password: string | undefined;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }

}
