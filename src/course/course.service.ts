import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly coursesRepository: MongoRepository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return await this.coursesRepository.find();
  }

  async findOne(id: string): Promise<Course> {
    return await this.coursesRepository.findOneBy({ id });
  }

  // async remove(id: string): Promise<void> {
  //   await this.coursesRepository.delete(id);
  // }

  async findByDept(deptCode: string): Promise<Course[]> {
    return await this.coursesRepository.find({
      where: {
        deptCode: deptCode,
      },
    });
  }

  async createCourse(course: CreateCourseDto): Promise<void> {
    await this.coursesRepository.save(course);
  }
}
