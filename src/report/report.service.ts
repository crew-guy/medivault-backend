import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Report } from './report.entity';
import { CreateReportDto } from './dto/report.dto';
import { v4 as uuidv4 } from 'uuid';

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
    return await this.reportsRepository.findOneBy({ id });
  }

  // async remove(id: string): Promise<void> {
  //   await this.reportsRepository.delete(id);
  // }

  async findByAuthor(authorId: string): Promise<Report[]> {
    return await this.reportsRepository.find({
      where: {
        authorId: authorId,
      },
    });
  }

  async createReport(data: CreateReportDto): Promise<any> {
    const report = { uuid: uuidv4(), ...data };
    return await this.reportsRepository.save(report);
  }
}
