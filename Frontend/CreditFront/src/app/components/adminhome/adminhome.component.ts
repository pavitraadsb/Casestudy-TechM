import { Component, OnInit } from '@angular/core';
import { CreditCardApplication } from '../credit-card-application/credit-card-application.model';
import { CreditCardService } from 'src/app/service/credit-card.service';
import { AdminService } from 'src/app/service/admin.service';
import { Transaction } from '../transaction-history/transaction-history.model';
import { SupportRequest } from '../support-request/support-request.model';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  // pendingApplications: CreditCardApplication[] = [];

  // constructor(private applicationService: CreditCardService) {}

  // ngOnInit() {
  //   this.loadPendingApplications();
  // }

  // loadPendingApplications() {
  //   this.applicationService.getCreditCardApplications().subscribe(
  //     applications => {
  //       this.pendingApplications = applications;
  //     },
  //     error => {
  //       console.error('Failed to load pending applications', error);
  //     }
  //   );
  // }

  // approveApplication(application: CreditCardApplication): void {
  //   if (application.ApplicationId !== undefined) {
  //     application.ApplicationStatus = 'Approved';
  //     this.applicationService.updateCreditCardApplication(application.ApplicationId, application).subscribe(
  //       () => {
  //         console.log('Application approved');
  //         this.loadPendingApplications();
  //       },
  //       (error) => {
  //         console.error('Error approving application', error);
  //       }
  //     );
  //   } else {
  //     console.error('ApplicationId is undefined');
  //   }
  // }
  // applications: CreditCardApplication[] = [];
  // transactions: Transaction[] = [];
  // supportRequests: SupportRequest[] = [];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    
  }

  // loadDashboardData() {
  //   this.adminService.getRecentApplications().subscribe(
  //     data => {
  //       this.applications = data;
  //     },
  //     error => {
  //       alert('Error loading applications');
  //     }
  //   );

  //   this.adminService.getRecentTransactions().subscribe(
  //     data => {
  //       this.transactions = data;
  //     },
  //     error => {
  //       alert('Error loading transactions');
  //     }
  //   );

  //   this.adminService.getRecentSupportRequests().subscribe(
  //     data => {
  //       this.supportRequests = data;
  //     },
  //     error => {
  //       alert('Error loading support requests');
  //     }
  //   );
  // }

}
