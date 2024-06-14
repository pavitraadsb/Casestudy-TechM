export class SupportRequest {
    supportRequestId: number = 0;
   
    issueDescription: string = '';
    status: string = '';
    requestDate: Date = new Date();
    resolutionDate?: Date;
    handledBy?: number;
  }
  