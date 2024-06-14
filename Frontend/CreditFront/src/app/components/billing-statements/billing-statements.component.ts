import { Component, OnInit } from '@angular/core';
import { BillingStatement, Payment } from './billing-statements.mode';
import { BillingService } from 'src/app/service/billing.service';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/service/transaction.service';

interface Statement {
  statementId: number;
  customerId: number;
  statementDate: Date;
  totalDue: number;
  amountPaid: number;
  payments: any[];
}

@Component({
  selector: 'app-billing-statements',
  templateUrl: './billing-statements.component.html',
  styleUrls: ['./billing-statements.component.css']
})
export class BillingStatementsComponent implements OnInit {
  // customerId: number | undefined; // Define customerId as number | undefined
  // newPayment: { amount: number | null; paymentMethod: string } = { amount: null, paymentMethod: '' };
  // payments: Payment[] = []; // To store fetched payments if needed

  // constructor(private paymentsService: BillingService,private router:Router) {}

  // ngOnInit(): void {
  //   // Retrieve customerId from local storage or wherever applicable
  //   const customerIdFromLocalStorage = localStorage.getItem('customerId');
  //   if (customerIdFromLocalStorage) {
  //     this.customerId = parseInt(customerIdFromLocalStorage, 10);
  //     this.getPayments(this.customerId); // Fetch payments if needed
  //   } else {
  //     console.error('Customer ID not found in local storage.');
  //     // Handle the case where customer ID is not found in local storage
  //   }
  // }

  // getPayments(customerId: number): void {
  //   this.paymentsService.getPayments(customerId).subscribe((data: Payment[]) => {
  //     this.payments = data;
  //   });
  // }

  // makePayment(): void {
  //   if (this.customerId !== undefined && this.newPayment.amount !== null && this.newPayment.paymentMethod !== '') {
  //     const newPayment = {
  //       amount: this.newPayment.amount,
  //       paymentMethod: this.newPayment.paymentMethod,
  //       statementId: this.customerId
  //     };

  //     this.paymentsService.makePayment(newPayment).subscribe((payment: Payment) => {
  //       console.log('Payment successful:', payment);
  //       // Optionally, update payments list or perform other actions after payment
  //       this.payments.push(payment);
  //       this.newPayment.amount = null;
  //       this.newPayment.paymentMethod = '';
  //     });
  //   } else {
  //     console.error('Please provide valid payment details.');
  //     // Handle the case where input details are not valid
  //   }
  // }
  // navigateTo(){
  //   this.router.navigate(['userdashboard/trans'])
  // }
  statements: Statement[] = [];
  selectedStatement: Statement | null = null;
  amount: number = 0;
  paymentMethod: string = '';

  constructor(private paymentService: TransactionService) { }

  ngOnInit(): void {
    this.statements = this.paymentService.getStatements();
  }

  makePayment() {
    if (this.selectedStatement && this.amount && this.paymentMethod) {
      this.paymentService.makePayment(this.selectedStatement.statementId, this.amount, this.paymentMethod);
      alert('Payment Successful');
    } else {
      alert('Please fill in all details');
    }
  }
}