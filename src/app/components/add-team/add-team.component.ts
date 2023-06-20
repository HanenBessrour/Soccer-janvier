import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
teamForm : FormGroup;
team : any ={};
  constructor() { }

  ngOnInit() {
  }
addTeam() {
 let idTeam =JSON.parse(localStorage.getItem("teamId") || "1");
  let teams =JSON.parse(localStorage.getItem("teams")|| "[]");
  this.team.id= idTeam;
  teams.push (this.team);
  localStorage.setItem("teams", JSON.stringify(teams));
  localStorage.setItem("teamId", idTeam + 1);
}

}
