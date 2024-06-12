import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Payment } from '../components/billing-statements/billing-statements.mode';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl = 'https://localhost:7169/api/Payments';

  constructor(private http: HttpClient) {}

  makePayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, payment);
  }

  getPayment(id: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/${id}`);
  }

  getCustomerPayments(StatementId: number): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}/Statement/${StatementId}`);
  }
}
