import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../components/transaction-history/transaction-history.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  // private apiUrl = 'https://localhost:7169/api';

  // constructor(private http: HttpClient) {}
  // getTransactions(CustomerId:number):Observable<Transaction[]>{
  //   return this.http.get<Transaction[]>(`${this.apiUrl}/Transactions?CustomerId=${CustomerId}`);
  // }
  getStatements() {
    return [
      {
        statementId: 1,
        customerId: 1,
        statementDate: new Date(),
        totalDue: 100,
        amountPaid: 0,
        payments: []
      },
      {
        statementId: 2,
        customerId: 1,
        statementDate: new Date(),
        totalDue: 150,
        amountPaid: 0,
        payments: []
      },
      {
        statementId: 3,
        customerId: 1,
        statementDate: new Date(),
        totalDue: 10000,
        amountPaid: 5000,
        payments: []
      },
    ];
  }

  getTransactions() {
    return [
      {
        transactionId: 1,
        paymentId: 1,
        transactionDate: new Date(),
        amount: 100,
        merchant: 'Amazon',
        category: 'Shopping',
        status: 'Completed'
      },
      {
        transactionId: 2,
        paymentId: 2,
        transactionDate: new Date(),
        amount: 100,
        merchant: 'flipcart',
        category: 'Shopping',
        status: 'Partial'
      }
    ];
  }

  makePayment(statementId: number, amount: number, paymentMethod: string) {
    // For simplicity, this function does nothing in this mock service.
    console.log(`Payment made for Statement ID: ${statementId}, Amount: ${amount}, Method: ${paymentMethod}`);
  }
}
