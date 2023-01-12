import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "api/user/all";

  constructor(private http:HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

}
