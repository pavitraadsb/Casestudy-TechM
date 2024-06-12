import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../components/creditcards/creditcards.model';

@Injectable({
  providedIn: 'root'
})
export class CreditcardsService {
  private apiUrl = 'https://localhost:7169/api/CreditCards';

  constructor(private http: HttpClient) {}

  getCreditCards(customerId: number): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.apiUrl}/customer/${customerId}`);
  }
}
