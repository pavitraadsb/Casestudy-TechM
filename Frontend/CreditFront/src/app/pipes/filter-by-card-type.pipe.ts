import { Pipe, PipeTransform } from '@angular/core';
import { CreditCardApplication } from '../components/credit-card-application/credit-card-application.model';

@Pipe({
  name: 'filterByCardType'
})
export class FilterByCardTypePipe implements PipeTransform {
  transform(applications: CreditCardApplication[], filterValue: string): CreditCardApplication[] {
    if (!applications || !filterValue) {
      return applications;
    }

    return applications.filter(app => app.cardType.toLowerCase().includes(filterValue.toLowerCase()));
  }

}
