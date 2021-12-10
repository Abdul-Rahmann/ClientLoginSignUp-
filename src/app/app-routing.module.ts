import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientTransactionsComponent } from './client-transactions/client-transactions.component';
import { LoginComponent } from './login/login.component';
import { MarketDataComponent } from './market-data/market-data.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './ADMIN/admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './ADMIN/admin-users/admin-users.component';
import { AdminTransactionsComponent } from './ADMIN/admin-transactions/admin-transactions.component';
import { AdminLogsComponent } from './ADMIN/admin-logs/admin-logs.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'dashboard', component:ClientDashboardComponent, canActivate:[AuthGuard]}, //Login session
  {path:'market-data', component:MarketDataComponent},
  {path:'transaction', component:ClientTransactionsComponent},
  {path:'admin', component:AdminDashboardComponent},
  {path:'admin-logs', component:AdminLogsComponent},
  {path:'admin-transaction', component:AdminTransactionsComponent},
  {path:'admin-users', component:AdminUsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
