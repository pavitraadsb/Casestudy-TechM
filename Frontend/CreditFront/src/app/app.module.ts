import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardApplicationComponent } from './components/credit-card-application/credit-card-application.component';
import { TransactionHistoryComponent } from './components/transaction-history/transaction-history.component';
import { BillingStatementsComponent } from './components/billing-statements/billing-statements.component';
import { UserdashboardComponent } from './dashboard/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { SupportRequestComponent } from './components/support-request/support-request.component';
import { ReportComponent } from './components/report/report.component';
import { CreditcardsComponent } from './components/creditcards/creditcards.component';
import { StatusComponent } from './components/status/status.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdminheaderComponent } from './components/adminheader/adminheader.component';
import { AdminreviewComponent } from './components/adminreview/adminreview.component';
import { AdmincardtypeComponent } from './components/admincardtype/admincardtype.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { LoginheaderComponent } from './components/loginheader/loginheader.component';
import { FilterByCardTypePipe } from './pipes/filter-by-card-type.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CreditCardApplicationComponent,
    TransactionHistoryComponent,
    BillingStatementsComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    SupportRequestComponent,
    ReportComponent,
    CreditcardsComponent,
    StatusComponent,
    AdminhomeComponent,
    AdminheaderComponent,
    AdminreviewComponent,
    AdmincardtypeComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    AdminloginComponent,
    LoginheaderComponent,
    FilterByCardTypePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
