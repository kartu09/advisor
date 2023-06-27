import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import Usuario from 'src/app/interfaces/usuario/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TacticService } from 'src/app/services/tactic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = ''; 
  loginForm: FormGroup;
  usuarios: Usuario[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService, 
    private tacticService: TacticService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.tacticService.getAllUsers().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      console.log(usuarios);
    })

  }
  

  login() {
    try {
      console.log('Intentamos login')
      from(this.authService.loginEmailUser(this.username, this.password))
        .subscribe(response => {
          console.log('LOGIN SUCCESSFULL');
          this.authService.setAuthenticated(true);
          if (this.usuarios) {
            let user = this.usuarios.find(usuario => usuario.email == this.username);
            if (user && user.id != this.authService.getUserId()) {
              this.tacticService.updateUser(user, this.authService.getUserId());
            }
          }
          
          window.location.href = '/home';
        });
    } catch (error) {
      console.error(error);
    }
  }

}
