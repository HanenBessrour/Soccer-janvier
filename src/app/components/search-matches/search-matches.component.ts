import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
  searchMatchesForm : FormGroup;
  searchedMatches :any;
  matches :any ;

  constructor(
    private formBuilder : FormBuilder,
    private matchService : MatchService) { }

  ngOnInit() {
    this.searchMatchesForm = this.formBuilder.group ({
      scoreOne :["",[Validators.required]],
      scoreTwo :["",[Validators.required]]
    });
  }

  searchMatch(){
    console.log("here object", this.searchMatchesForm.value)
    this.matchService.searchMatch(this.searchMatchesForm.value).subscribe(
     (response)=>{
      console.log("here response from BE", response.findedMatches);
       this.matches=response.findedMatches;
     }
    )
  }


  // search() {
  //   let matches = JSON.parse(localStorage.getItem("matches") || "[]");
  //   let score = this.searchMatchesForm.value;
  //   for (let i = 0; i < matches.length; i++) {
  //     if (matches[i].scoreOne == score || matches[i].scoreTwo == score ) {
  //        this.searchedMatches= matches[i];
  //     }
  //   }
  //   localStorage.setItem("matches", JSON.stringify(matches));
  // }

}
