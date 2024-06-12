export class CreditCard {
    CreditCardId: number = 0;
    CustomerId: number = 0;
    CardType: string = '';
    CardNumber: string = '';
    ExpiryDate: Date = new Date();
    CVV: string = '';
    CreditLimit: number = 0;
    AvailableCredit: number = 0;
    IssuedDate: Date = new Date();
    Status: string = '';
  }
  