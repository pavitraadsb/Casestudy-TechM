import { Component, OnInit } from '@angular/core';
import { CreditCardApplication } from '../credit-card-application/credit-card-application.model';
import { StatusService } from 'src/app/service/status.service';
import {  Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  allapplications: CreditCardApplication[] = [];
  customerId: number | null = null; // Assume this is fetched after login and stored appropriately
  filteredApplicationsList=this.allapplications;
  filterValue: string = '';

  constructor(private statusService:StatusService,private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.customerId = this.customerService.getCustomerId();
    //console.log('LocalStorage contents:', localStorage); // Log the contents of localStorage

    if (this.customerId !== null) {
      //console.log('Customer ID:', this.customerId);
      this.fetchApplications(this.customerId);
    } else {
      console.error('Customer ID not found in localStorage');
      this.router.navigate(['/userdashboard/home']);
    }
  }

  fetchApplications(customerId:number) {
    if (customerId !== null) {
      this.statusService.getApplicationsByCustomerId(customerId).subscribe({
        next:(application)=>{
          console.log(application);
          this.allapplications=application;
          this.filteredApplicationsList=application;
          this.filterApplications();
        },
        error:(error)=>{
          console.error('Error fetching complaints',error);
        }
    });
    }
  }
  filterApplications(){
    if(!this.filterValue){
      this.filteredApplicationsList=this.allapplications;
    }
    else{
      this.filteredApplicationsList=this.allapplications.filter(c=>c.cardType.toLowerCase().includes(this.filterValue.toLowerCase()));
    }
  }
}


