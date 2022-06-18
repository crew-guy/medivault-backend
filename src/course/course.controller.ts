import { CourseService } from './course.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
  @Get()
  async findAll(): Promise<Course[]> {
    console.log('I returned courses from', process.env.PORT_LISTENING);
    return await this.courseService.findAll();
  }
  @Get('test')
  async testRes(): Promise<{ message: string }> {
    return { message: `Responding from ${process.env.PORT_LISTENING}` };
  }

  @Get('dept/:deptId')
  async findByDept(@Param() params): Promise<Course[]> {
    return await this.courseService.findByDept(params.deptId);
  }

  @Post()
  async createCourse(@Body() course: CreateCourseDto): Promise<void> {
    return await this.courseService.createCourse(course);
  }
}
