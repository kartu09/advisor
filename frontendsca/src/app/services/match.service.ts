import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import Match from '../interfaces/match/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private firestore: Firestore) { }

  // Método para obtener todos los equipos
  getAll(): Observable<Match[]> {
    const matchRef = collection(this.firestore, 'match');
		return collectionData(matchRef, {idField:'id'}) as Observable<Match[]>;
  }

  // Método para obtener un equipo por ID
  getById(id: number){
    return null;
  }

  // Método para crear un nuevo equipo
  createMatch(match: Match){
    match.creationDate = this.currentDate();
    match.timePlayed = '0';
    const matchRef = collection(this.firestore, 'match');
		return addDoc(matchRef, match);
  }

  // Método para actualizar un equipo existente
  update(match: Match){
    return match;
  }

  // Método para eliminar un equipo existente
  deleteMatch(match: Match){
    const matchDocRef = doc(this.firestore, 'match/'+match.id)
		return deleteDoc(matchDocRef);
  }

  currentDate (){
    const currentDateTime = new Date();

    const year = currentDateTime.getFullYear();
    const month = currentDateTime.getMonth() + 1; // Los meses en JavaScript se indexan desde 0, por lo que se agrega 1
    const day = currentDateTime.getDate();
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();

    // Formateo de los componentes de fecha y hora en una cadena
    const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    // Asignación a una variable de tipo string
    const dateTimeString: string = formattedDateTime;

    return dateTimeString;
  }
  
}
