import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { MarketDataComponent } from './market-data/market-data.component';
import { HttpClient, HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientDashboardComponent,
    MarketDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
