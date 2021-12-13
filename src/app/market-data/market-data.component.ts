import { Component, OnInit,Input } from '@angular/core';
import { MarketData } from '../model/market-data.model';
import { HttpClient,HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {
  // "http://localhost:3000/signupUsers"
  private exchange1url = "http://localhost:3000/exchange1";
  private exchange2url = "http://localhost:3000/exchange2";
  // private exchange1url = "https://exchange.matraining.com/md";
  // private exchange2url = "https://exchange2.matraining.com/md";

  exchange1: any;
  exchange2: any;

  // @Input()
  // marketDataExchange1?:any;
  // @Input()
  // marketDataExchange2?:any;

  // @Input()
  // ttl?:string;
  

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.exchange1url).subscribe(md => this.exchange1= md);
    this.http.get(this.exchange2url).subscribe(md => this.exchange2= md);
  }

}
