import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { FileInterface, Report } from './report.entity';
import { CreateReportDto } from './dto/report.dto';
import { v4 as uuidv4 } from 'uuid';
import algoliasearch from 'algoliasearch';
import { OCRConverter } from './aws-textract';
import { ObjectId } from 'mongodb';

const client = algoliasearch(
  process.env.ALGOLIA_API_ACCESS_KEY,
  process.env.ALGOLIA_API_ACCESS_SECRET,
);
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
      await index.deleteObject(reportId);
    });
    return 'reports deleted successfully!';
  }

  async createReport(data: CreateReportDto): Promise<any> {
    let report: Report = { ...data, uuid: uuidv4() };
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
        uuid: uuidv4(),
        extractedText: concatenatedFilesText,
        ...data,
      };
      await index.saveObject(
        { ...report, objectID: report.uuid },
        {
          autoGenerateObjectIDIfNotExist: true,
        },
      );
      await index.setSettings({
        // Select the attributes you want to search in
        searchableAttributes: ['title', 'extractedText', 'date', 'tags'],
        // Define business metrics for ranking and sorting
        // customRanking: ['desc(popularity)'],
        // Set up some attributes to filter results on
        // attributesForFaceting: ['categories', 'searchable(brand)', 'price'],
      });
    } catch (error) {}

    return await this.reportsRepository.save(report);
  }
}
