export class Transaction {
  transactionId: number = 0;
  creditCardId?: number = 0;
  transactionDate: Date = new Date();
  amount: number = 0;
  merchant: string = '';
  category: string = '';
  status: string = '';
}
