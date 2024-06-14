export class BillingStatement {
  statementId: number = 0;
  month: string = '';
  year: number = 0;
  totalDue: number = 0;
  dueDate: Date = new Date();
  payments: any;
}
export interface Payment {
  paymentId: number;
  amount: number;
  paymentMethod: string;
  paymentDate: Date;
  totalDue: number;
  outstandingBalance: number;
}
