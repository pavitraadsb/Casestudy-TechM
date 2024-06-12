import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../components/login/login.model';
import { Observable } from 'rxjs';
import { CreditCardApplication } from '../components/credit-card-application/credit-card-application.model';
import { Transaction } from '../components/transaction-history/transaction-history.model';
import { SupportRequest } from '../components/support-request/support-request.model';
import { Admin } from '../components/register/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://localhost:7169/api/Admins';//admins controller url

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<Admin> {
    return this.http.post<Admin>(`${this.apiUrl}/login`, request);
  }
  getRecentApplications(): Observable<CreditCardApplication[]> {
    return this.http.get<CreditCardApplication[]>(`${this.apiUrl}/applications`);
  }

  getRecentTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
  }

  getRecentSupportRequests(): Observable<SupportRequest[]> {
    return this.http.get<SupportRequest[]>(`${this.apiUrl}/supportrequests`);
  }
}
