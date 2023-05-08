import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/enums/Role';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = ''; 
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  login() {
    try {
      console.log('Intentamos login')
      this.loginService.login(this.username, this.password)
        .subscribe(response => {
          console.log('LOGIN SUCCESSFULL');
        });
    } catch (error) {
      console.error(error);
    }
  }

}
