import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Team from '../interfaces/team/team';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { setDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private firestore: Firestore, private authService: AuthService) { 
  }

  // Método para obtener todos los equipos
  getAll(): Observable<Team[]> {
    const teamRef = collection(this.firestore, 'team');
		return collectionData(teamRef, {idField:'id'}) as Observable<Team[]>;
  }

  // Método para obtener un equipo por ID
  getById(id: number){
    return null;
  }

  // Método para crear un nuevo equipo
  createTeam(team: Team){
    const teamRef = collection(this.firestore, 'team');
    team.coachId = this.authService.getUserId();
		return addDoc(teamRef, team);
  }

  // Método para actualizar un equipo existente
  update(team: Team){
    this.deleteTeam(team);
    console.log('equipo eliminado');

    this.createTeam(team);
    console.log('equipo creado');
    return team;
  }

  // Método para eliminar un equipo existente
  deleteTeam(team: Team){
    const teamDocRef = doc(this.firestore, 'team/'+team.id)
		return deleteDoc(teamDocRef);
  }
}