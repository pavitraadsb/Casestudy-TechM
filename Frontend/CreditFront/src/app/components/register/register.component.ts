import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Customer } from './register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  customer : Customer={
    FirstName: '',
    LastName: '',
    Email: '',
    Password: '',
    ConfirmPassword: '',
    DateOfBirth: new Date(),
    Address: '',
    PhoneNumber: '',
    SSN: '',
    EmploymentInformation: ''
  };

  constructor(private authService: CustomerService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.customer.Password !== this.customer.ConfirmPassword) {
        alert('Passwords do not match');
        return;
      }

      this.authService.register(this.customer).subscribe(
        response => {
          alert('Registration successful');
          this.router.navigate(['/login']);
        },
        error => {
          alert('Registration failed');
          console.error('Error:', error);
        }
      );
    } else {
      alert('Form is invalid');
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
  }

}
