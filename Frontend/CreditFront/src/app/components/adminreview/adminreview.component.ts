import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCardApplication } from '../credit-card-application/credit-card-application.model';
import { AdminService } from 'src/app/service/admin.service';
import { CreditCardService } from 'src/app/service/credit-card.service';
interface ReviewRequest {
  applicationId: number;
  reviewedBy: number;
  status: string;
}
@Component({
  selector: 'app-adminreview',
  templateUrl: './adminreview.component.html',
  styleUrls: ['./adminreview.component.css']
})
export class AdminreviewComponent implements OnInit {
  applications: CreditCardApplication[] = [];
  adminId: number | undefined;

  constructor(private applicationService: CreditCardService) {}

  ngOnInit(): void {
    this.adminId = this.getAdminIdFromLocalStorage();
    if (this.adminId !== undefined) {
      this.loadApplications();
    } else {
      console.error('Admin ID not found in local storage.');
    }
  }

  loadApplications(): void {
    this.applicationService.getApplications().subscribe(
      (applications) => {
        this.applications = applications;
      },
      (error) => {
        console.error('Error fetching applications:', error);
      }
    );
  }

  getAdminIdFromLocalStorage(): number | undefined {
    const adminIdStr = localStorage.getItem('AdminId');
    return adminIdStr ? +adminIdStr : undefined;
  }

  changeStatus(application: CreditCardApplication, status: string): void {
    if (this.adminId === undefined) {
      console.error('Admin ID not found in local storage.');
      return;
    }

    const applicationId: number = application.applicationId!;
    if (applicationId === undefined) {
      console.error('Application ID is undefined.');
      return;
    }

    this.applicationService.updateApplicationStatus(applicationId, status, this.adminId).subscribe(
      () => {
        application.applicationStatus = status;
        application.reviewedBy = this.adminId!;
      },
      (error) => {
        console.error('Error updating application status:', error);
      }
    );
  }
}
