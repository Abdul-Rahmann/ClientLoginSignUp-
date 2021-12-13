import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { MarketDataComponent } from './market-data/market-data.component';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientTransactionsComponent } from './client-transactions/client-transactions.component';
import { AuthGuard } from './guards/auth.guard';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
// import { AdminDashboardComponent } from './ADMIN/admin-dashboard/admin-dashboard.component';
import { AdminDashboardComponent } from './ADMIN/admin-dashboard/admin-dashboard.component';
import { AdminLogsComponent } from './ADMIN/admin-logs/admin-logs.component';
import { AdminUsersComponent } from './ADMIN/admin-users/admin-users.component';
import { AdminTransactionsComponent } from './ADMIN/admin-transactions/admin-transactions.component';
import { User } from './model/user';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClientDashboardComponent,
    MarketDataComponent,
    LoginComponent,
    SignupComponent,
    ClientTransactionsComponent,
    AdminDashboardComponent,
    AdminLogsComponent,
    AdminUsersComponent,
    AdminTransactionsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    // HttpClient,
    
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
