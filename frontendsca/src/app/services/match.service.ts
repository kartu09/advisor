import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../interfaces/match/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private apiUrl: string = "api/match/";

  constructor(private http: HttpClient) { }

  // Método para obtener todos los partidos
  getAll(): Observable<Match[]> {
    console.log('Dentro de getall');
    return this.http.get<Match[]>(this.apiUrl + 'all');
  }

  // Método para obtener un partido por ID
  getById(id: number): Observable<Match> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Match>(url);
  }

  // Método para crear un nuevo partido
  create(match: Match): Observable<Match> {
    return this.http.post<Match>(this.apiUrl, match);
  }

  // Método para actualizar un partido existente
  update(match: Match): Observable<Match> {
    const url = `${this.apiUrl}/${match.id}`;
    return this.http.put<Match>(url, match);
  }

  // Método para eliminar un partido existente
  delete(id: number): Observable<Match> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Match>(url);
  }
  
}
