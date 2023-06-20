import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
teamURL : string="http://localhost:3000/api/teams";
  constructor(private httpClient : HttpClient) { }

getAllTeams() {
  return this.httpClient.get(this.teamURL);
}

getTeamById(id) {
return this.httpClient.get(`${this.teamURL}/${id}`);
}

addTeam(newObj) {
return this.httpClient.post(this.teamURL, newObj);
}
delete(id){
  return this.httpClient.delete(`${this.teamURL}/${id}`);
}

}
