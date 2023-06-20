import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() matchInput:any;
  

  constructor() { }

  ngOnInit() {
  }

  scoreColor(s1, s2){
    if (s1 > s2){
      return ["green", "Win"];
    } else if (s1 < s2) {
      return ["orange", "Loss"];
     
    } 
    else {
      return ["blue","Draw"];
    }
  }

  // scoreResult(s1, s2){
  //   if (s1 > s2){
  //     return "Win";
  //   } else if (s1 < s2) {
  //     return "Loss";
     
  //   } 
  //   else {
  //     return "Draw";
  //   }
  // }

}
