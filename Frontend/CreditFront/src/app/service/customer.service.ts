import { Injectable } from '@angular/core';
import { Customer } from '../components/register/register.model';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustLoginRequest } from '../components/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private CustomerIdKey = 'CustomerId';
  private apiUrl = 'https://localhost:7169/api/Customers';

  constructor(private http: HttpClient) {}

  register(customer: Customer): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, customer);
  }

  setCustomerId(customerId: number | undefined): void {
    if (customerId !== undefined) {
      localStorage.setItem(this.CustomerIdKey, customerId.toString());
    } else {
      console.error('CustomerId is undefined.');
    }
  }

  getCustomerId(): number | null {
    const customerIdStr = localStorage.getItem(this.CustomerIdKey);
    return customerIdStr ? +customerIdStr : null;
  }

  clearCustomerId(): void {
    localStorage.removeItem(this.CustomerIdKey);
  }

  login(loginRequest: CustLoginRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginRequest).pipe(
      tap((response) => {
        if (response && response.customerId !== undefined) {
          this.setCustomerId(response.customerId);
        } else {
          console.error('Response does not contain customerId:', response);
        }
      })
    );
  }
}
