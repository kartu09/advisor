import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Role } from 'src/app/enums/role';
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

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  login() {
    try {
      console.log('Intentamos login')
      from(this.authService.loginEmailUser(this.username, this.password))
        .subscribe(response => {
          console.log('LOGIN SUCCESSFULL');
          this.authService.setAuthenticated(true);
          window.location.href = '/home';
        });
    } catch (error) {
      console.error(error);
    }
  }

}
