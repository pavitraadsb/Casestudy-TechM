export class Transaction {
  TransactionId: number = 0;
  CustomerId: number = 0;
  CreditCardId: number = 0;
  TransactionDate: Date = new Date();
  Amount: number = 0;
  Merchant: string = '';
  Category: string = '';
  Status: string = '';
}
