import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import User from '../interfaces/usuario/Usuario';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Role } from '../enums/role';
import Usuario from '../interfaces/usuario/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = "api/user/";

  constructor(private firestore: Firestore, private authService: AuthService) { }

  // Método para obtener todos los equipos
  getAll(): Observable<User[]> {
    const userRef = collection(this.firestore, 'user');
		return collectionData(userRef, {idField:'id'}) as Observable<User[]>;
  }

  // Método para obtener un equipo por ID
  getById(id: number){
    return null;
  }
  
  // Método para crear un nuevo equipo
  createUser(user: User){
    const userRef = collection(this.firestore, 'user');
		return addDoc(userRef, user);
  }

  // Método para actualizar un equipo existente
  update(user: User){
    return user;
  }

  // Método para eliminar un equipo existente
  deleteUser(user: User){
    const userDocRef = doc(this.firestore, `users/${user.id}`)
		return deleteDoc(userDocRef);
  }

  getCurrentUser(): any{
    return this.authService.getCurrentUser();
  }
}
