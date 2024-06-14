import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../login/login.model';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Admin } from '../register/admin.model';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginRequest: LoginRequest = new LoginRequest();
  loginError: string = '';

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.adminService.login(this.loginRequest).subscribe(
      (admin: any) => {
        console.log('Admin response:', admin);
        if (admin && admin.adminId !== undefined) {
          localStorage.setItem('AdminId', admin.adminId.toString());
          this.router.navigate(['/admindashboard']);
        } else {
          this.loginError = 'Login response does not contain a valid adminId.';
          console.error('Invalid login response:', admin);
        }
      },
      (error) => {
        console.error('Error:', error);
        this.loginError = 'An error occurred during login. Please try again.';
      }
    );
  }
}
