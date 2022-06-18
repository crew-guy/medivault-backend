import { Controller, Get, Param, Query } from '@nestjs/common';
import { NotionService } from './notion.service';

@Controller('notion')
export class NotionController {
  constructor(private readonly notionService: NotionService) {}

  @Get()
  async getCoursesDb() {
    return this.notionService.getCourseDb();
  }

  @Get('dept/:deptId')
  async getCoursesByDept(@Param() params) {
    console.log(`dept ID is ${params.deptId}`);
    return this.notionService.getCoursesByDept(params.deptId);
  }
}
