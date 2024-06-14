import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCardApplication } from '../components/credit-card-application/credit-card-application.model';
import { Observable } from 'rxjs';
import { CardType } from '../components/credit-card-application/credit-card-application.component';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  
  private apiUrl = 'https://localhost:7169/api';

  constructor(private http: HttpClient) {}

  getCardTypes(): Observable<CardType[]> {
    return this.http.get<CardType[]>(`${this.apiUrl}/CardTypes`);
  }

  submitApplication(application: CreditCardApplication): Observable<any> {
    return this.http.post(`${this.apiUrl}/CreditCardApplications/apply`, application);
  }
  getApplications(): Observable<CreditCardApplication[]> {
    return this.http.get<CreditCardApplication[]>(`${this.apiUrl}/CreditCardApplications/admin`);
  }

  updateApplicationStatus(applicationId: number, status: string, adminId: number): Observable<any> {
    const url = `${this.apiUrl}/CreditCardApplications/${applicationId}/status`;
    return this.http.put(url, { status, reviewedBy: adminId });
  }
  
  
}
