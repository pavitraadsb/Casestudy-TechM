import { Component, OnInit } from '@angular/core';
import { CreditCardApplication } from './credit-card-application.model';
import { CreditCardService } from 'src/app/service/credit-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card-application',
  templateUrl: './credit-card-application.component.html',
  styleUrls: ['./credit-card-application.component.css']
})
export class CreditCardApplicationComponent implements OnInit {
  application: CreditCardApplication = {
    CustomerId: 0, // Replace with actual customer ID from your authentication service
    CardType: '',
    AnnualIncome: 0,
    EmploymentStatus: '',
    CreditScore: 0,
    ApplicationStatus: 'Pending'
  };

  constructor(private applicationService: CreditCardService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.application.ApplicationDate=new Date();
    this.applicationService.applyForCreditCard(this.application).subscribe(
      response => {
        console.log('Application submitted successfully', response);
      },
      error => {
        console.error('Application submission failed', error);
      }
    );
  }
}
