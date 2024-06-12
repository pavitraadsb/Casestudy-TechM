import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../components/transaction-history/transaction-history.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'https://localhost:7169/api/Transactions';

  constructor(private http: HttpClient) {}

  create(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.apiUrl, transaction);
  }

  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/${id}`);
  }

  getCustomerTransactions(CreditCardId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/CreditCard/${CreditCardId}`);
  }
}
