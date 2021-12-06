import { Component, OnInit } from '@angular/core';
import { MarketData } from './model/market-data.model';
import { MARKET_DATA } from 'src/db-market-data';
import { HttpClient, HttpClientModule } from  '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello GRINDER';
  // appMarketData = MARKET_DATA;
  exchange1:any;
  exchange2:any;
  // private url = "http://localhost:8086/exchange/md";
  private exchange1url = "https://exchange.matraining.com/md";
  private exchange2url = "https://exchange2.matraining.com/md";
  



  constructor(private http : HttpClient){}

  ngOnInit(){
    this.http.get(this.exchange1url).subscribe(md => this.exchange1= md);
    this.http.get(this.exchange2url).subscribe(md => this.exchange2= md);
  }
}
