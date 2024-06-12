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
  request: SupportRequest = new SupportRequest();

  constructor(private router: Router, private requestService: SupportService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.requestService.create(this.request).subscribe(
      (response) => {
        this.router.navigate(['/support-request-status', response.supportRequestId]);
      },
      (error) => {
        alert('Support request failed');
      }
    );
  }
}
