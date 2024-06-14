import { Component, OnInit } from '@angular/core';
import { CustLoginRequest } from './login.model';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest: any = {};
  loginError: string = '';

  constructor(
    private router: Router,
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {}

  navigateToRegister(): void {
    this.router.navigate(['register']);
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.customerService.login(this.loginRequest).subscribe(
      (customer) => {
        console.log('Logged in customer:', customer);
        if (customer && customer.customerId !== undefined) {
          this.customerService.setCustomerId(customer.customerId);
          this.router.navigate(['/userdashboard']);
        } else {
          this.loginError = 'Login response does not contain a valid customerId.';
          console.error('Invalid login response:', customer);
        }
      },
      (error) => {
        console.error('Login error:', error);
        if (error.status === 401) {
          this.loginError = 'Invalid username or password. Please try again.';
        } else {
          this.loginError = `An error occurred: ${error.message}`;
        }
      }
    );
  }
  
}
