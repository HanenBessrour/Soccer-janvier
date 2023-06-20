import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //  Server destination address
  matchURL: string = "http://localhost:3000/api/matches";

  constructor(private httpClient: HttpClient) { }


  // Response : array of objects
  getAllMatches() {
    return this.httpClient.get<{ matches: any, message: string }>(this.matchURL);
  }

  // x : match id (6,9,2,...)
  // Response : one object
  getMatchById(x) {
    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${x}`);
    // return this.httpClient.get(this.matchURL + "/" + x);
  }
  // y : match id (6,9,2,...)
  // Response : Boolean
  deleteMatch(y) {
    return this.httpClient.delete(`${this.matchURL}/${y}`);
  }

  // matchObj : {scoreOne : 1, scoreTwo : 3,...}
  // Response : Boolean
  addMatch(matchObj) {
    return this.httpClient.post<{ message: string }>(this.matchURL, matchObj);
  }
  // newMatch : object with new values
  // Response : Boolean
  editMatch(newMatch) {
    return this.httpClient.put(this.matchURL, newMatch);
  }
  // obj ={scoreOne :3, scoreTwo :1}
  searchMatch(obj) {
    return this.httpClient.post<{ findedMatches: any }>(this.matchURL + "/searchMatches", obj);
  }



}
