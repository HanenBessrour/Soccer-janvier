import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  playerForm : FormGroup;
  player : any ={};
  constructor() { }

  ngOnInit() {
  }


  addPlayer(){
   console.log("Here player object", this.player);
  }
}
