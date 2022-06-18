export class CreateCourseDto {
  courseCode: string;
  deptCode: string;
  courseType: string;
  credits: number;
  name: string;
  description?: string;
  courseContent?: string[];
  textBooks?: string[];
  referenceBooks?: string[];
  prerequisites?: string[];
}
