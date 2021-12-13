import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {
  public portfolioForm!:FormGroup
  public sellForm!:FormGroup
  public buyForm!:FormGroup


  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.portfolioForm = this.formBuilder.group({
      portfolioName:[null],
      userId:['']

    });

    this.sellForm = this.formBuilder.group({
     
      sellTicker:[null],
      sellQuantity:[null],
      sellPrice:[null]
      

    });

    this.buyForm = this.formBuilder.group({
    
      buyTicker:[null],
      buyQuantity:[null],
      buyPrice:[null]
      

    });
    
  }

  addPortfolio(){
    this.http.post<any>("http://localhost:3000/portfolio",this.portfolioForm.value).subscribe(
      res=>{
        
        this.portfolioForm.reset()
        // this.router.navigate(['dashboard']);
        alert("Portfolio created!")
        location.reload()
        console.log("Shit is created")
      },err=>{
        alert("Product adding failed, check server")
      }
    )
  }

  // logout(){
  //   console.log("Logout")
  //   auth
  // }

  sellProduct(){
    alert("Product sold successfully")
    console.log(this.sellForm.value.sellTicker)
    console.log(this.sellForm.value.sellPrice)
    console.log(this.sellForm.value.sellQuantity)
    location.reload()
    
  }

  buyProduct(){
    alert("Product bought successfully")
    console.log(this.buyForm.value.buyTicker)
    console.log(this.buyForm.value.buyPrice)
    console.log(this.buyForm.value.buyQuantity)
    location.reload()
    
  }

}
