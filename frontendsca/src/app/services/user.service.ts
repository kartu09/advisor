import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../app/interfaces/user/user';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "api/user/";

  constructor(private http:HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + id);
  } 

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url + "all");
  }

  newUser(user: User): Observable<any> {
    return this.http.post(this.url + "new", user)
    .pipe(
      catchError(error => {
        console.log('Error: ', error);
        return throwError(error);
      })
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.url + "delete/"+ id);
  }

}
