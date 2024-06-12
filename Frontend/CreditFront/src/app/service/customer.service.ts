import { Injectable } from '@angular/core';
import { Customer } from '../components/register/register.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustLoginRequest } from '../components/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://localhost:7169/api/Customers';

  constructor(private http: HttpClient) {}

  register(customer: Customer): Observable<any> {
    return this.http.post<any>(this.apiUrl, customer);
  }
  login(request: CustLoginRequest): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/login`, request);
  }
  updateCustomer(id: number, customer: Customer): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, customer);
  }
  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${id}`);
  }
}
