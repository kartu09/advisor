import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private apiUrl = 'http://localhost:8080/teams'; // URL de la API del backend

  constructor(private http: HttpClient) { }

  // Método para obtener todos los equipos
  getAll(): Observable<Team[]> {
    return this.http.get<Team[]>(this.apiUrl);
  }

  // Método para obtener un equipo por ID
  getById(id: number): Observable<Team> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Team>(url);
  }

  // Método para crear un nuevo equipo
  create(team: Team): Observable<Team> {
    return this.http.post<Team>(this.apiUrl, team);
  }

  // Método para actualizar un equipo existente
  update(team: Team): Observable<Team> {
    const url = `${this.apiUrl}/${team.id}`;
    return this.http.put<Team>(url, team);
  }

  // Método para eliminar un equipo existente
  delete(id: number): Observable<Team> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Team>(url);
  }
}