import { Component, OnInit,Input } from '@angular/core';
import { MarketData } from '../model/market-data.model';

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css']
})
export class MarketDataComponent implements OnInit {

  @Input()
  marketDataExchange1?:any;
  @Input()
  marketDataExchange2?:any;

  @Input()
  ttl?:string;
  

  constructor() { }

  ngOnInit(): void {
  }

}
