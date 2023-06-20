import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTab : any;
  // matches: any =[
    
  //   {scoreOne: 1, scoreTow:3, teamOne: "CA", teamTwo:"EST" },
  //   {scoreOne: 0, scoreTow:2, teamOne:"JUV", teamTwo:"aaa" },
  //   {scoreOne: 4, scoreTow:0, teamOne: "INT", teamTwo:"ROM" },
  //   {scoreOne: 0, scoreTow:0, teamOne: "BB", teamTwo:"CC" }
  // ];

  constructor() { }

  ngOnInit() {
    this.matchesTab = JSON.parse(localStorage.getItem("matches") || "[]")
  }

}
