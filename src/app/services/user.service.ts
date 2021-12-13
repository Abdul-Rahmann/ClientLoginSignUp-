import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(user:User){
    return this.http.post("http://localhost:8080/user/register",user,{responseType:'text' as 'json'});
  }

  loginUser(loginUser:Login){
    return this.http.post("http://localhost:8080/user/login",loginUser,{responseType:'text' as 'json'});
  }
}
