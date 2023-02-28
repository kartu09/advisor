import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../interfaces/match/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private apiUrl = 'http://localhost:3000/partidos';

  constructor(private http: HttpClient) { }

  getPartidos(): Observable<Match[]> {
    return this.http.get<Match[]>(this.apiUrl);
  }
  
}
