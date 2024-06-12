import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { Report } from './report.model';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getAdminReports(1).subscribe((data: Report[]) => {
      this.reports = data;
    });
  }

}
