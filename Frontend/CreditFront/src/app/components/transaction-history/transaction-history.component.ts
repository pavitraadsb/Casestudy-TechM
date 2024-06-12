import { Component, OnInit } from '@angular/core';
import { Transaction } from './transaction-history.model';
import { TransactionService } from 'src/app/service/transaction.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    // Assuming customer ID is 1 for demo purposes
    this.transactionService.getCustomerTransactions(1).subscribe(
      (response) => {
        this.transactions = response;
      },
      (error) => {
        alert('Error fetching transactions');
      }
    );
  }
}
