
import { Injectable } from '@angular/core';
import { Role } from '../enums/role';
import {  Firestore,  collection, collectionData} from '@angular/fire/firestore';
import { Auth, User,  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import Usuario from '../interfaces/usuario/Usuario';
import { DocumentData, addDoc, getDocs, query, where } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { TacticService } from './tactic.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;
  private readonly AUTH_KEY = 'isAuthenticated';
  private currentUser: Usuario = {} as Usuario;
  private userId: string;
  private email: string | null | undefined;
  //users: Observable<Usuario[]>;

  constructor( private firestore: Firestore, private authFire: Auth, private tacticService: TacticService) { 
    // check if user is authenticated
    this.userId = '';
    this.authFire.onAuthStateChanged((user: User | null) => {
      if (user) {
        // El usuario está autenticado
        
        // Puedes acceder a la información del usuario, como su ID, correo electrónico, etc.
        this.userId = user.uid;
        this.email = user.email;
        
        // ... Haz lo que necesites con la información del usuario actualmente autenticado
      } else {
        // No hay ningún usuario autenticado
        console.log('No hay usuario autenticado');
      }
    });

  }

  async ngOnInit() {
    this.authenticated = this.isAuthenticated();
    this.getCurrentUser();

  }

  isLogged(): boolean{
    return this.isAuthenticated();
  }

  getAll(): Observable<Usuario[]> {
    const userRef = collection(this.firestore, 'gente');
		return collectionData(userRef, {idField:'id'}) as Observable<Usuario[]>;
  }

  registerUser(email: string, pass: string, rol: Role) {
    console.log(rol);
    return createUserWithEmailAndPassword(this.authFire, email, pass).then(
      (userCredential) => {
        console.log(userCredential);
        window.location.href = '/login';
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
    
  }

  /* private updateUserData(user: User, rol: Role, pass: string) {
    console.log(user);
    

    const data: Usuario = {
      id: user.uid,
      password: pass,
      email: user.email ? user.email : undefined,
      role: rol
    }

    const genteRef = collection(this.firestore, 'gente');
		return addDoc(genteRef, data);
  } */

  loginEmailUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(this.authFire, email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  setAuthenticated(isAuthenticated: boolean): void {
    sessionStorage.setItem(this.AUTH_KEY, JSON.stringify(isAuthenticated));
  }

  isAuthenticated(): boolean {
    const isAuthenticated = sessionStorage.getItem(this.AUTH_KEY);
    return isAuthenticated ? JSON.parse(isAuthenticated) : false;
  }

  clearAuthenticated(): void {
    sessionStorage.removeItem(this.AUTH_KEY);
  }

  getUserId(): string {
    return this.userId;
  }

  async isUserAdmin(userUid: any){
    const q = query(collection(this.firestore, 'users'), where('userUid', '==', userUid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size > 0) {
      const user = querySnapshot.docs[0].data() as DocumentData;
      return user['role'] === 'admin';
    }

    return false;
  }

  async isUserCoach(userUid: any){
    const q = query(collection(this.firestore, 'users'), where('userUid', '==', userUid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size > 0) {
      const user = querySnapshot.docs[0].data() as DocumentData;
      return user['role'] === 'coach';
    }

    return false;
  }

  cerrarSesion() {
    this.clearAuthenticated();
    window.location.href = '/login';
    return signOut(this.authFire);
  }

   getCurrentUser(): Usuario {//continuar y añadir observable para que el current user le pueda llegar al otro lado 
    console.log(this.userId);
    console.log(this.email);
    if (this.email != null && this.email != undefined) {
      this.currentUser.email = this.email;
    }
      
      this.currentUser.id = this.userId;
    return this.currentUser;
  }
}
