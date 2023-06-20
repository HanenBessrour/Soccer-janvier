import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerURL : string ="http://localhost:3000/api/players"
  constructor(private httpClient :HttpClient) { }
 
  getAllPlayers() {
    return this.httpClient.get(this.playerURL);
  }
  
  getPlayerById(id) {
  return this.httpClient.get(`${this.playerURL}/${id}`);
  }
  
  addPlayer(player) {
  return this.httpClient.post(this.playerURL, player);
  }
  deletePlayer(id){
    return this.httpClient.delete(`${this.playerURL}/${id}`);
  }
  editPlayer(newPlayer){
    return this.httpClient.put("playerUrl", newPlayer);
  }
}
