import { Component, OnInit } from '@angular/core';
import { CreditCardApplication } from 'src/app/components/credit-card-application/credit-card-application.model';
import { CreditCard } from 'src/app/components/creditcards/creditcards.model';
import { SupportRequest } from 'src/app/components/support-request/support-request.model';
import { Transaction } from 'src/app/components/transaction-history/transaction-history.model';

import { CreditCardService } from 'src/app/service/credit-card.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  pendingApplications: CreditCardApplication[] = [];

  constructor(private applicationService: CreditCardService) {}

  ngOnInit() {
    this.loadPendingApplications();
  }

  loadPendingApplications() {
    this.applicationService.getCreditCardApplications().subscribe(
      applications => {
        this.pendingApplications = applications;
      },
      error => {
        console.error('Failed to load pending applications', error);
      }
    );
  }

  approveApplication(application: CreditCardApplication): void {
    if (application.ApplicationId !== undefined) {
      application.ApplicationStatus = 'Approved';
      this.applicationService.updateCreditCardApplication(application.ApplicationId, application).subscribe(
        () => {
          console.log('Application approved');
          this.loadPendingApplications();
        },
        (error) => {
          console.error('Error approving application', error);
        }
      );
    } else {
      console.error('ApplicationId is undefined');
    }
  }
}

