import { Component, OnInit } from '@angular/core';
import { CustLoginRequest, LoginRequest } from './login.model';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { Customer } from '../register/register.model';
import { Admin } from '../register/admin.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest: CustLoginRequest = new CustLoginRequest();
  adminRequest:LoginRequest=new LoginRequest();

  constructor(private router: Router, private customerService: CustomerService, private adminService: AdminService) {}
  navigateToRegister(){
    this.router.navigate(['register']);
  }
  onSubmit() {
    // Authenticate customer
    this.customerService.login(this.loginRequest).subscribe(
      (customer:Customer) => {
        // Navigate to user dashboard
        this.router.navigate(['/userdashboard']);
      },
      (error) => {
        // If customer authentication fails, authenticate admin
        this.adminService.login(this.adminRequest).subscribe(
          (admin:Admin) => {
            // Navigate to admin dashboard
            this.router.navigate(['/admindashboard']);
          },
          (error) => {
            // If both customer and admin authentication fails
            alert('Invalid credentials');
          }
        );
      }
    );
  }
  

  ngOnInit(): void {
  }

}
