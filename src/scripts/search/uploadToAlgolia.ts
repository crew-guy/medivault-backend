import algoliasearch from 'algoliasearch';
import mongoose from 'mongoose';

const client = algoliasearch('4PXSN3AJ7Z', 'f32b9e6b4f38899a6a7a2b216768ccff');

const index = client.initIndex('courses');

const getDepartment = (deptCode: string) => {
  switch (deptCode) {
    case 'CS':
      return 'Computer Science';
    case 'EE':
      return 'Electrical Engineering';
    case 'ME':
      return 'Mechanical Engineering';
    case 'CE':
      return 'Civil Engineering';
    case 'CH':
      return 'Chemical Engineering';
    case 'BT':
      return 'Biotechnology';
    case 'NA':
      return 'Naval Architecture & Ocean Engineering';
    case 'OE':
      return 'Naval Architecture & Ocean Engineering';
    case 'AE':
      return 'Aerospace Engineering';
    case 'AS':
      return 'Aerospace Engineering';
    case 'ED':
      return 'Engineering Design';
    case 'BE':
      return 'Bioengineering';
    case 'BS':
      return 'Biosciences';
    case 'EP':
      return 'Engineering Physics';
    case 'MS':
      return 'Management Studies';
    case 'AM':
      return 'Applied Mechanics';
    case 'PH':
      return 'Physics';
    case 'MA':
      return 'Mathematics';
    case 'CY':
      return 'Chemistry';
    case 'HS':
      return 'Humanities & Social Sciences';
    case 'MM':
      return 'Metallurgy & Materials Science';
    case 'ID':
      return 'Inter-disciplinary';
    default:
      return 'Miscellaneous';
  }
};

const uploadToAlgolia = async () => {
  const connection = await mongoose.connect(
    'mongodb+srv://coursemapper:anA56sz3*CM100@varaipatam.2g6bq.mongodb.net/coursemap-db?retryWrites=true&w=majority',
    // 'mongodb://localhost:27017/coursemap-db',
  );
  console.log(connection);
  if (!connection) return;
  const Schema = mongoose.Schema;
  //TODO : add type safety
  const courseSchema = new Schema({
    name: {
      type: String,
      minlength: 1,
    },
    courseContent: [
      {
        type: String,
        minlength: 1,
      },
    ],
    description: {
      type: String,
      minlength: 1,
    },
    deptCode: String,
    credits: Number,
    courseCode: String,
  });
  const Course = mongoose.model('Course', courseSchema);
  const courses = await Course.find({});
  const courseList: any = [];
  courses.forEach((course) => {
    if (
      course.name &&
      course.name?.length > 1 &&
      course.description &&
      course.deptCode &&
      course.deptCode?.length > 0 &&
      course.description?.length > 20
    ) {
      courseList.push({
        name: course.name,
        courseContent: course.courseContent,
        description: course.description,
        deptCode: course.deptCode,
        courseId: course.courseCode,
        department: getDepartment(course.deptCode),
        credits: course.credits,
      });
    }
  });
  console.log(courseList.length);
  await index.saveObjects(courseList, {
    autoGenerateObjectIDIfNotExist: true,
  });
  await index.setSettings({
    // Select the attributes you want to search in
    searchableAttributes: [
      'name',
      'courseContent',
      'description',
      'department',
      'deptCode',
      'courseId',
    ],
    // Define business metrics for ranking and sorting
    // customRanking: ['desc(popularity)'],
    // Set up some attributes to filter results on
    // attributesForFaceting: ['categories', 'searchable(brand)', 'price'],
  });
};
uploadToAlgolia();
