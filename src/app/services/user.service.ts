import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userURL: string = "http://localhost:3000/api/users"
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.userURL + "/login", user)

  }

  signup(user: any, avatar: File) {
    let formData = new FormData();
    // append : injecter une valeur dans une clé
    formData.append("firstName", user.firstName);
    formData.append("lastName", user.lastName);
    formData.append("email", user.email);
    formData.append("pwd", user.pwd);
    formData.append("img", avatar);
    return this.http.post(this.userURL + "/signup", formData);

  }
}
