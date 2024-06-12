
export interface Report {
    ReportId: number;
    ReportType: string;
    GeneratedBy: number;
    GeneratedDate: Date;  // or Date if you handle conversion
    Content: string;  // JSON or other structured format
  }
  