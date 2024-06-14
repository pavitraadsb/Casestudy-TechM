export interface CreditCardApplication {
  applicationId:number ;
  customerId:number;
  cardType: string ;
  annualIncome: number ;
  employmentStatus: string ;
  creditScore: number ;
  applicationStatus:string;
  applicationDate?:Date;
  reviewedDate?:Date;
  reviewedBy?:number;
  accountNumber:string
}

