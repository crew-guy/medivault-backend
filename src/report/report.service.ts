import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { FileInterface, Report } from './report.entity';
import { CreateReportDto } from './dto/report.dto';
import { v4 as uuidv4 } from 'uuid';
import algoliasearch from 'algoliasearch';
import { OCRConverter } from './aws-textract';
import { ObjectId } from 'mongodb';

const client = algoliasearch('E1LBNTNXRC', 'd5a9cb25a544e5f526845e193f93e775');
const index = client.initIndex('report_text');

const REPORTS_BUCKET_NAME = 'mediavault-reports-db';
@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private readonly reportsRepository: MongoRepository<Report>,
  ) {}

  async findAll(): Promise<Report[]> {
    return await this.reportsRepository.find();
  }

  async findOne(id: string): Promise<Report> {
    return await this.reportsRepository.findOneBy(id);
  }

  async findByAuthor(authorId: string): Promise<Report[]> {
    return await this.reportsRepository.find({
      where: {
        authorId: authorId,
      },
    });
  }

  async deleteReport(reportIds: string[]): Promise<any> {
    reportIds.forEach(async (reportId: string) => {
      await this.reportsRepository.deleteOne({
        _id: new ObjectId(reportId),
      });
      console.log(reportId);
      await index.deleteObject(reportId);
    });
    return 'reports deleted successfully!';
  }

  async createReport(data: CreateReportDto): Promise<any> {
    const uniqueID = uuidv4();
    let report: Report = { ...data, uuid: uniqueID };
    try {
      const concatenatedFiles = await Promise?.all(
        data.files.map(async (file: FileInterface) => {
          const parts = file.dataUrl.split('/');
          const lastIdx = parts.length - 1;
          const filename = parts[lastIdx];
          const bucketKey = `${data.authorId}/${filename}`;
          const ocrObject = new OCRConverter(REPORTS_BUCKET_NAME, bucketKey);
          return await ocrObject?.analyze_document_text();
        }),
      );
      const concatenatedFilesText = concatenatedFiles.join('');
      report = {
        uuid: uniqueID,
        extractedText: concatenatedFilesText,
        ...data,
      };
      const reportResponse = await this.reportsRepository.save(report);
      await index.saveObject({ ...report, objectID: reportResponse.uuid });
      await index.setSettings({
        // Select the attributes you want to search in
        searchableAttributes: ['title', 'extractedText', 'date', 'tags'],
        // Define business metrics for ranking and sorting
        // customRanking: ['desc(popularity)'],
        // Set up some attributes to filter results on
        // attributesForFaceting: ['categories', 'searchable(brand)', 'price'],
      });
      return reportResponse;
    } catch (error) {
      console.log(error);
    }
  }
}
