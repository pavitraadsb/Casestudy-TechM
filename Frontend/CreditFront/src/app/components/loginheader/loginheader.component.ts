import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginheader',
  templateUrl: './loginheader.component.html',
  styleUrls: ['./loginheader.component.css']
})
export class LoginheaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
navigateToAdmin(){
  this.router.navigate(['adminlogin']);
}
navigateToLogin(){
  this.router.navigate(['login']);
}
}
