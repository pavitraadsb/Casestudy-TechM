import { Component, OnInit } from '@angular/core';
import { SupportRequest } from './support-request.model';
import { SupportService } from 'src/app/service/support.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-request',
  templateUrl: './support-request.component.html',
  styleUrls: ['./support-request.component.css']
})
export class SupportRequestComponent implements OnInit {
  supportRequest: SupportRequest = new SupportRequest();
  supportRequests: SupportRequest[] = [];

  constructor(private supportService: SupportService) {}

  ngOnInit() {
    this.loadSupportRequests();
  }

  loadSupportRequests() {
    this.supportService.getSupportRequests().subscribe(
      data => {
        this.supportRequests = data;
      },
      error => {
        alert('Error loading support requests');
      }
    );
  }

  onSubmit() {
    this.supportService.submitSupportRequest(this.supportRequest).subscribe(
      response => {
        alert('Support request submitted successfully');
        this.loadSupportRequests();
      },
      error => {
        alert('Error submitting support request');
      }
    );
  }
}
