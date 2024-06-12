import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCardApplication } from '../components/credit-card-application/credit-card-application.model';
import { Observable } from 'rxjs';
import { CreditCard } from '../components/creditcards/creditcards.model';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  private apiUrl = 'https://localhost:7169/api/CreditCardApplications';
  private creditCardUrl = 'https://localhost:7169/api/CreditCards';
  constructor(private http: HttpClient) {}
  applyForCreditCard(application: CreditCardApplication): Observable<CreditCardApplication> {
    return this.http.post<CreditCardApplication>(this.apiUrl, application);
  }
  getCreditCardApplications(): Observable<CreditCardApplication[]> {
    return this.http.get<CreditCardApplication[]>(`${this.apiUrl}`);
  }

  updateCreditCardApplication(id: number, application: CreditCardApplication): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, application);
  }
  createCreditCard(creditCard: CreditCard): Observable<CreditCard> {
    return this.http.post<CreditCard>(this.creditCardUrl, creditCard);
  }
}
