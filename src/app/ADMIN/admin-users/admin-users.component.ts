import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  users:any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/user/getAllUsers")
    response.subscribe((data) => this.users=data )
  }

}
