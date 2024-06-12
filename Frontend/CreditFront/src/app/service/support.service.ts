import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SupportRequest } from '../components/support-request/support-request.model';

@Injectable({
  providedIn: 'root'
})
export class SupportService {
  private apiUrl = 'https://localhost:7169/api/SupportRequests';

  constructor(private http: HttpClient) {}

  create(request: SupportRequest): Observable<SupportRequest> {
    return this.http.post<SupportRequest>(`${this.apiUrl}`, request);
  }

  getRequest(id: number): Observable<SupportRequest> {
    return this.http.get<SupportRequest>(`${this.apiUrl}/${id}`);
  }

  updateRequestStatus(id: number, request: SupportRequest): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, request);
  }
}
