import { Component, OnInit } from '@angular/core';
import { CreditCardApplication } from './credit-card-application.model';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';
import { CreditCardService } from 'src/app/service/credit-card.service';

export interface CardType{
  cardTypeId:number;
  typeName:string
}
@Component({
  selector: 'app-credit-card-application',
  templateUrl: './credit-card-application.component.html',
  styleUrls: ['./credit-card-application.component.css']
})
export class CreditCardApplicationComponent implements OnInit {

application: CreditCardApplication = {
  applicationId:0,
  customerId: 0,
  cardType: '',
  annualIncome: 0,
  employmentStatus: '',
  creditScore: 0,
  applicationStatus: 'Pending',
  applicationDate: new Date(),
  accountNumber: ''
};
cardTypes: CardType[] = [];

constructor(private http: HttpClient, private router: Router,private customerService:CustomerService,private creditCardService:CreditCardService) {}

ngOnInit(): void {
  // Fetch customer ID from local storage
  const customerId = this.customerService.getCustomerId();
    if (customerId === null) {
      console.error('Customer ID not found in local storage');
      // Handle appropriately, maybe redirect to login or set a default behavior
    } else {
      // Set customerId in the application object
      this.application.customerId = customerId;
    }

  // Fetch card types
  this.creditCardService.getCardTypes().subscribe(
    data => {
      this.cardTypes = data;
      console.log('Card Types:', this.cardTypes); // Log the data to ensure it's being fetched
    },
    error => console.error('There was an error!', error)
  );
}

onSubmit(form:NgForm): void {
  if (form.invalid) {
    return;
  }
  console.log('submitted application:',this.application);
  this.http.post('https://localhost:7169/api/CreditCardApplications/apply', this.application)
    .subscribe(
      response => {
        console.log('Application submitted successfully!', response);
        this.router.navigate(['userdashboard/status']);
      },
      error => {
        console.error('Error submitting application', error);
      }
    );
}

}
