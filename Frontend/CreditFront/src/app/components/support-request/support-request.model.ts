export class SupportRequest {
    supportRequestId: number = 0;
    customerId: number = 0;
    transactionId?: number;
    issueDescription: string = '';
    status: string = '';
    requestDate: Date = new Date();
    resolutionDate?: Date;
    handledBy?: number;
  }
  