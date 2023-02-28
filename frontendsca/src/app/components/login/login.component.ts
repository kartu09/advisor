import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/enums/Role';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined; 
  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.http.post('/login', { username: this.username, password: this.password }, { responseType: 'text' }).subscribe(
      (response) => {
        // Si la respuesta es satisfactoria, redirecciona al usuario a la página de inicio
        
        window.location.href = '/home';
      },
      (error) => {
        // Si hay un error en la respuesta, muestra un mensaje de error en la consola
        console.error(error);
      }
    );
  }
}
