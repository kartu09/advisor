import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../app/interfaces/user/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "api/user/all";

  constructor(private http:HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url +id);
  } 

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url + "all");
  }

  newUser(user: User): Observable<any> {
    return this.http.post(this.url + "new", user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.url + "delete/"+ id);
  }

}
