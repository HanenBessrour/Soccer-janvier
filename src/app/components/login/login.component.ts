import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup;
errorMsg : string;


  constructor(private formBuilder : FormBuilder,
    private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:["", [Validators.required, Validators.email]],
      pwd : ["", [Validators.required]]
    })
  }
login() {
  console.log("here object", this.loginForm.value);
  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let user = this.loginForm.value;
  let findedUser;

  for (let i = 0; i < users.length; i++) {
    if ((this.loginForm.value.email == users[i].email) && (this.loginForm.value.pwd == users[i].pwd)) {
      // success
      localStorage.setItem("connectedUser", users[i].id);
      findedUser = users[i];
      break;
    }}
  
    if (findedUser) {
        if (findedUser.role =="admin") {
          this.router.navigate(["admin"]);
        } else {
          this.router.navigate([""]);
        }
      } 
      else {
        this.errorMsg ="Please check Email/Pwd";
      }
    
  
  
    
  
}
}
