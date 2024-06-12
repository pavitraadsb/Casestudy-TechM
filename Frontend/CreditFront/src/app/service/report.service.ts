import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../components/report/report.model';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'https://localhost:7169/api/Reports';

  constructor(private http: HttpClient) {}

  generateReport(report: Report): Observable<Report> {
    return this.http.post<Report>(this.apiUrl, report);
  }

  getReport(id: number): Observable<Report> {
    return this.http.get<Report>(`${this.apiUrl}/${id}`);
  }

  getAdminReports(adminId: number): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.apiUrl}/admin/${adminId}`);
  }
}
