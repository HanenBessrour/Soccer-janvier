import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
playersTab: any=[
  {name:"Messi", position:"ATK", nbr:10, img:"assets/images/img_1.jpg"},
  {name:"CR7", position:"MID", nbr:7, img:"assets/images/img_3.jpg"}
];
  constructor() { }

  ngOnInit() {
  }

}
