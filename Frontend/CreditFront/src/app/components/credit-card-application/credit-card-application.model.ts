export interface CreditCardApplication {
    ApplicationId?: number ;
    CustomerId: number ;
    CardType: string ;
    AnnualIncome: number ;
    EmploymentStatus: string ;
    CreditScore: number ;
    ApplicationStatus: string;
    ApplicationDate?: Date ;
    ReviewedDate?: Date;
    ReviewedBy?: number;
    AccountNumber?:string;
  }
  