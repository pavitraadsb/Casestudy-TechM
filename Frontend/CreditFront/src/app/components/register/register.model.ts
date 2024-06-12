export class Customer{
    CustomerId?:number=0;
    FirstName:string='';
    LastName:string='';
    Email:string='';
    Password:string='';
    ConfirmPassword:string='';
    DateOfBirth:Date=new Date();
    Address:string='';
    PhoneNumber:string='';
    SSN:string='';
    EmploymentInformation:string=''
}