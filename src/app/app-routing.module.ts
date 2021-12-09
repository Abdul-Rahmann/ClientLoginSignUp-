import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientTransactionsComponent } from './client-transactions/client-transactions.component';
import { LoginComponent } from './login/login.component';
import { MarketDataComponent } from './market-data/market-data.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:ClientDashboardComponent, canActivate:[AuthGuard]}, //Login session
  {path:'market-data', component:MarketDataComponent},
  {path:'transaction', component:ClientTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
