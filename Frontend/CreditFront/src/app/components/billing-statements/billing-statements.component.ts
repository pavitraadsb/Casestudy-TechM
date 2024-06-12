import { Component, OnInit } from '@angular/core';
import { Payment } from './billing-statements.mode';
import { BillingService } from 'src/app/service/billing.service';

@Component({
  selector: 'app-billing-statements',
  templateUrl: './billing-statements.component.html',
  styleUrls: ['./billing-statements.component.css']
})
export class BillingStatementsComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private paymentService: BillingService) {}

  ngOnInit(): void {
    // Assuming customer ID is 1 for demo purposes
    this.paymentService.getCustomerPayments(1).subscribe(
      (response) => {
        this.payments = response;
      },
      (error) => {
        alert('Error fetching payments');
      }
    );
  }
}
