import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
findedPlayer : any;
  constructor() { }

  ngOnInit() {
    let id=localStorage.getItem("id");
    let players= JSON.parse(localStorage.getItem("players")|| "[]");
    for (let i = 0; i < players.length; i++) {
      if (players[i].id == id) {
        this.findedPlayer=players[i];
        break;
      }
      
    }
  }

}
