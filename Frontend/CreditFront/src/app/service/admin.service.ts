import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  LoginRequest } from '../components/login/login.model';
import { Observable } from 'rxjs';
import { CreditCardApplication } from '../components/credit-card-application/credit-card-application.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'https://localhost:7169/api/Admins';//admins controller url

  constructor(private http: HttpClient) {}

  login(request: LoginRequest): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, request);
  }
}
