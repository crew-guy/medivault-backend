import { BodyParts, FileInterface, ReportType } from '../report.entity';

export class CreateReportDto {
  files: FileInterface[];
  // Phone number field will exist on a report only if reports are stored in a separate database and users in another database
  authorId?: string; // to link a report to a unique patient
  date: string;
  tags: (ReportType | string)[];
  partsAffected?: BodyParts[];
  title: string;
  extractedText: string;
}
