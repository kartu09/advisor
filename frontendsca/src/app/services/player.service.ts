import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Player from '../interfaces/player/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl: string = "api/player/";

  constructor(private firestore: Firestore) { }

  // Método para obtener todos los equipos
  getAll(): Observable<Player[]> {
    const playerRef = collection(this.firestore, 'player');
		return collectionData(playerRef, {idField:'id'}) as Observable<Player[]>;
  }

  // Método para obtener un equipo por ID
  getById(id: number){
    return null;
  }

  // Método para crear un nuevo equipo
  createPlayer(player: Player){
    const playerRef = collection(this.firestore, 'player');
		return addDoc(playerRef, player);
  }

  // Método para actualizar un equipo existente
  update(player: Player){
    this.deletePlayer(player);
    console.log('player eliminado');

    this.createPlayer(player);
    console.log('player creado');
    return player;
  }

  // Método para eliminar un equipo existente
  deletePlayer(player: Player){
    const playerDocRef = doc(this.firestore, 'player/'+player.id)
		return deleteDoc(playerDocRef);
  }
}
