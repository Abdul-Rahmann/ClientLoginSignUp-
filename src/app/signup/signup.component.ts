import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserRegistrationService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 

  user:User = new User("","","","");
  message:any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router,private service:UserRegistrationService) { }

  ngOnInit(): void {
  
  }

  // signUp(){
  //   this.http.post<any>("http://localhost:8080/user/register",this.signupForm.value).subscribe(
  //     // this.http.post<any>("http://localhost:3000/signupUsers",this.signupForm.value).subscribe(
  //     res=>{
  //       alert("Signup successful");
  //       this.signupForm.reset();
  //       this.router.navigate(['login']);
  //     }, err=>{
  //       alert("Something went wrong");
  //     }
  //   )
  // }

  signUp(){
    let response = this.service.registerUser(this.user);
    response.subscribe((data)=>{
      this.message=data
      alert(this.message)
      // location.reload()
      this.router.navigate(['login']);
    },(err)=>{
      alert("Sorry, something went wrong, kindly check your server")
    });
  }

}
