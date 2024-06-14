import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCardApplication } from '../components/credit-card-application/credit-card-application.model';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = 'https://localhost:7169/api/CreditCardApplications/customer';

  constructor(private http: HttpClient) { }

  getApplicationsByCustomerId(CustomerId: number): Observable<CreditCardApplication[]> {
    return this.http.get<CreditCardApplication[]>(`${this.apiUrl}/${CustomerId}`)
  }
}
