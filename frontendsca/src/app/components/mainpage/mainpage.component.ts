import { Component } from '@angular/core';
import { Role } from 'src/app/enums/role';
import { UserService } from '../../services/user.service';
import User from 'src/app/interfaces/usuario/Usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TacticService } from 'src/app/services/tactic.service';
import Usuario from 'src/app/interfaces/usuario/Usuario';
import { MatchService } from 'src/app/services/match.service';
import Match from 'src/app/interfaces/match/match';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

  authenticated: boolean;
  allUsers: Usuario [] = [];
  currentUser: Usuario | undefined;
  matches: Match [] = [];
  showMatches: Match [] = [];



  private users: User[] = [];

  constructor(private userService: UserService, private authService: AuthService, private tacticService: TacticService, private matchService: MatchService) {
    this.authenticated = authService.isAuthenticated();
  }

  ngOnInit(): void {

    this.userService.getAll().subscribe(users => {
      console.log(users);
      this.users = users;
    });

    this.tacticService.getAllUsers().subscribe((users: Usuario[]) => {
      console.log(users);
      this.allUsers = users;
      this.currentUser = users.find(usuario => usuario.email == this.authService.getCurrentUser().email);
    })

    this.matchService.getAll().subscribe(matches => {
      this.matches = matches;
      console.log(matches);

      if (this.currentUser?.role == Role.USER) {
        this.showMatches = [];
      } else if (this.currentUser?.role == Role.COACH){
        this.showMatches = this.matches.filter(match => {
          if (match.local?.coachEmail == this.currentUser?.email || match.visitante?.coachEmail == this.currentUser?.email) {
            return true;
          } else {
            return false;
          }
        })
      } else {
        this.showMatches = this.matches;
      } 
    })
  }

}
