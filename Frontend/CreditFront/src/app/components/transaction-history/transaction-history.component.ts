import { Component, OnInit } from '@angular/core';

import { TransactionService } from 'src/app/service/transaction.service';
import { FormsModule } from '@angular/forms';

interface Transaction {
  transactionId: number;
  paymentId: number;
  transactionDate: Date;
  amount: number;
  merchant: string;
  category: string;
  status: string;
}
@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  // transactions: Transaction[] = [];
  // filters: any = {
  //   StartDate: '',
  //   EndDate: '',
  //   Amount: '',
   
  // };
  // constructor(private transactionService: TransactionService) {}

  // ngOnInit() {
  //   this.loadTransactions();
  // }

  // loadTransactions() {
  //   this.transactionService.getTransactions(this.filters).subscribe(
  //     data => {
  //       this.transactions = data;
  //     },
  //     error => {
  //       alert('Error loading transactions');
  //     }
  //   );
  // }

  // onFilter() {
  //   this.loadTransactions();
  // }
  transactions: Transaction[] = [];

  constructor(private paymentService: TransactionService) { }

  ngOnInit(): void {
    this.transactions = this.paymentService.getTransactions();
  }
}
