import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CreditCardApplicationComponent } from './components/credit-card-application/credit-card-application.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { BillingStatementsComponent } from './components/billing-statements/billing-statements.component';
import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { ReportComponent } from './components/report/report.component';
import { StatusComponent } from './components/status/status.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdminreviewComponent } from './components/adminreview/adminreview.component';
import { AdmincardtypeComponent } from './components/admincardtype/admincardtype.component';
import { SupportRequestComponent } from './components/support-request/support-request.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userdashboard',component:UserdashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'apply',component:CreditCardApplicationComponent},
    {path:'trans',component:TransactionHistoryComponent},
    {path:'pay',component:BillingStatementsComponent},
    {path:'report',component:ReportComponent},
    {path:'status',component:StatusComponent},
    {path:'support',component:SupportRequestComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    { path: '**', redirectTo: '/login' }
  ]},
  {path:'admindashboard',component:AdmindashboardComponent,children:[
    {path:'adminhome',component:AdminhomeComponent},
    {path:'adminreview',component:AdminreviewComponent},
    {path:'admincard',component:AdmincardtypeComponent},
    {path:'',redirectTo:'adminhome',pathMatch:'full'},
    { path: '**', redirectTo: '/adminlogin' }
  ]},
  {path:'',redirectTo:'login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
