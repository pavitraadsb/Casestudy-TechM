import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  BillingStatement, Payment } from '../components/billing-statements/billing-statements.mode';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl = 'http://localhost:5000/api/Payments'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  getPayments(CustomerId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${CustomerId}`);
  }

  makePayment(payment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payment);
  }
  // getCustomerPayments(StatementId: number): Observable<Payment[]> {
  //   return this.http.get<BillingStatement[]>(`${this.apiUrl}/Statement/${StatementId}`);
  // }
}
