export class CreditCard {
    creditCardId: number = 0;
    
    cardType: string = '';
    cardNumber: string = '';
    expiryDate: Date = new Date();
    CVV: string = '';
    creditLimit: number = 0;
    availableCredit: number = 0;
    issuedDate: Date = new Date();
    status: string = '';
  }
  