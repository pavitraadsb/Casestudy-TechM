import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface CardType {
  typeName: string;
}
@Component({
  selector: 'app-admincardtype',
  templateUrl: './admincardtype.component.html',
  styleUrls: ['./admincardtype.component.css']
})
export class AdmincardtypeComponent implements OnInit {
  cardType: CardType = {
    typeName: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('https://localhost:7169/api/CardTypes', this.cardType)
      .subscribe(
        response => {
          console.log('Card type added successfully!', response);
          this.router.navigate(['adminhome']);
        },
        error => {
          console.error('Error adding card type', error);
        }
      );
  }

  ngOnInit(): void {
  }

}
