import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Login } from '../interfaces/login';
import { Login } from '../model/login';
import { AuthService } from '../services/auth.service';
import { UserRegistrationService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser:Login = new Login("","");
  message:any
  returnUrl!:string
  role!:string

  constructor(private formBuilder:FormBuilder, private http:HttpClient,private router: Router, private authService:AuthService, private service : UserRegistrationService) { }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   email:[null,[Validators.required, Validators.email]],
    //   password:[null,[Validators.required]]

    // });

    // this.returnUrl = '/dashboard';
    // this.authService.logout()
  }

  // login(){
  //   this.http.get<any>("http://localhost:3000/signupUsers")
  //   .subscribe(
  //     res=>{
  //       const user = res.find((a:any)=>{
  //         // console.log(this.loginForm.value.email)
  //         // console.log(this.loginForm.value.password)
  //         // console.log(this.loginForm.value.role)
         

  //         // this.usernameer = a.fullName;
  //         // this.role = a.role
          
  //         // return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password && a.rol
  //         if(a.email === this.loginForm.value.email && a.password === this.loginForm.value.password ){
  //           this.role = a.role
  //           return true
  //         }else{
  //           return false
  //         }
  //       });
  //       if(user){
  //         console.log("Role is "+this.role)
  //         if(this.role === "ADMIN"){
  //           alert("Login Successful!!")
  //           this.router.navigate(['/admin'])
            

  //         }else{
  //           alert("Login Successful!!")
  //           this.loginForm.reset()
           
  
  //           localStorage.setItem('isLoggedIn',"true")
  //           localStorage.setItem('token',this.loginForm.value.email)
  //           this.router.navigate(['/dashboard'])
  //         }
  //       }else{
  //         alert("User not found!!");
  //       }
  //     },
  //     err=>{
  //       alert("Something went wrong!!")

  //     }
  //   )
  // }

  login(){
    let response = this.service.loginUser(this.loginUser);
    response.subscribe((data)=>{
      localStorage.setItem('isLoggedIn',"true")
      localStorage.setItem('token',this.loginUser.email)
      this.router.navigate(['/dashboard'])
      this.message=data
      alert(this.message)
      
    },(err)=>{
      alert("Sorry, something went wrong, kindly check your server")
    })
  }

}
