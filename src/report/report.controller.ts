import { ReportService } from './report.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Report } from './report.entity';
import { CreateReportDto } from './dto/report.dto';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}
  @Get()
  async findAll(): Promise<Report[]> {
    console.log('I returned reports from', process.env.PORT_LISTENING);
    return await this.reportService.findAll();
  }
  @Get('test')
  async testRes(): Promise<{ message: string }> {
    return { message: `Responding from ${process.env.PORT_LISTENING}` };
  }

  @Get('/:authorId')
  async findByAuthor(@Param() params): Promise<Report[]> {
    return await this.reportService.findByAuthor(params.authorId);
  }

  @Delete('/')
  async deleteReports(@Body() data: { data: string[] }): Promise<Report[]> {
    return await this.reportService.deleteReport(data.data);
  }

  @Post()
  async createReport(@Body() report: CreateReportDto): Promise<void> {
    return await this.reportService.createReport(report);
  }
}
