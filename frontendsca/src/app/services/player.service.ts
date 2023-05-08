import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../interfaces/player/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl: string = "api/player/";

  constructor(private http: HttpClient) { }

  // Método para obtener todos los jugadores
  getAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.apiUrl);
  }

  // Método para obtener un jugador por ID
  getById(id: number): Observable<Player> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Player>(url);
  }

  // Método para crear un nuevo jugador
  create(player: Player): Observable<Player> {
    return this.http.post<Player>(this.apiUrl, player);
  }

  // Método para actualizar un jugador existente
  update(player: Player): Observable<Player> {
    const url = `${this.apiUrl}/${player.id}`;
    return this.http.put<Player>(url, player);
  }

  // Método para eliminar un jugador existente
  delete(id: number): Observable<Player> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Player>(url);
  }
}
