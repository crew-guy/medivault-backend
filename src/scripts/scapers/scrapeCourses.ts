import axios from 'axios';
import FormData from 'form-data';
import * as fs from 'fs';
import * as path from 'path';
import { load } from 'cheerio';
import mongoose from 'mongoose';

const url = 'https://academic.iitm.ac.in/load_record.php';

const scrapeCourse = async () => {
  const text = fs.readFileSync(
    path.resolve(__dirname, '..', 'csv/course_info.txt'),
    'utf-8',
  );
  const textByLine = text.split('\n');
  let errorCounter = 0;
  const connection = await mongoose.connect(
    process.env.MONGO_CONNECTION_STRING,
    // 'mongodb://localhost:27017/coursemap-db',
  );
  console.log(connection);
  if (!connection) return;
  const Schema = mongoose.Schema;
  //TODO : add type safety
  const courseSchema = new Schema({
    courseCode: String,
    name: String,
    credits: Number,
    deptCode: String,
    courseContent: [String],
    description: String,
    courseType: String,
    textBooks: [String],
    referenceBooks: [String],
    prerequisites: [String],
  });
  const Course = mongoose.model('Course', courseSchema);
  await Course.deleteMany();
  for (let i = 0; textByLine.length - 1; i++) {
    const courseInfo = textByLine[i];
    const [courseCode, credits, courseType, deptCode] = courseInfo.split(',');
    const form = new FormData();
    form.append('pid', 'CoursesPendingApproval');
    form.append('dept_code', '');
    form.append('course', courseCode);
    try {
      const res = await axios.post(url, form, {
        headers: {
          ...form.getHeaders(),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const $ = load(res.data);
      const name = $('h4:nth-of-type(1)').text();
      //TODO : add type safety
      const description = processValue(
        ($('h5 p:nth-of-type(1)').children()['0']?.next as any)?.data,
      );
      const courseContentFromDb = processValue(
        ($('h5 p:nth-of-type(2)').children()['0']?.next as any)?.data,
      );
      const courseContent = processStringToStringArray(courseContentFromDb);
      const textBooksFromDb = processValue(
        ($('h5 p:nth-of-type(3)').children()['0']?.next as any)?.data,
      );
      const textBooks = processStringToStringArray(textBooksFromDb);
      const referenceBooksFromDb = processValue(
        ($('h5 p:nth-of-type(4)').children()['0']?.next as any)?.data,
      );
      const referenceBooks = processStringToStringArray(referenceBooksFromDb);
      const prerequisitesFromDb = processValue(
        ($('h5 p:nth-of-type(5)').children()['0']?.next as any)?.data,
      );

      const prerequisites =
        prerequisitesFromDb !== null
          ? prerequisitesFromDb
              ?.split(',')
              .map((prerequisite: string) => prerequisite.trim())
          : [];
      const course = new Course({
        courseCode,
        name,
        credits: +credits,
        courseType,
        deptCode,
        description,
        courseContent,
        textBooks,
        referenceBooks,
        prerequisites,
      });
      await course.save();
      console.log(courseCode, i);
    } catch (error) {
      console.log('invalid row', errorCounter++, i, courseCode, error);
    }
  }
};
scrapeCourse();

const processStringToStringArray = (value: string): string[] => {
  return value !== null
    ? value.split('\n').map((elem: string) => {
        if (elem.length > 0) {
          elem.replace(/\\t/g, '');
          return elem.trim();
        }
      })
    : [];
};

const processValue = (value: string): null | string => {
  if (!value) return null;
  const actualValue: string = value?.toLowerCase();
  if (
    !actualValue ||
    actualValue === 'nil' ||
    actualValue === '-nil-' ||
    actualValue === 'null' ||
    actualValue === 'na' ||
    actualValue === 'n/a' ||
    actualValue === 'none' ||
    actualValue === '---' ||
    actualValue === 'NULL'
  ) {
    return null;
  } else return value;
};

// ? LEGACY APPROACH  - actually hand-scraping each course's details
// const puppeteerScrapeWeb = () => {
//   // const browser = await puppeteer.launch({ headless: false });
//     // const page = await browser.newPage();
//     // await page.goto('https://academic.iitm.ac.in/course_detail.php');
//   try {
//     // const pageContent = await page.content();
//     // const $ = load(pageContent);
//     // //TODO : add type safety
//     // const deptDropdown = $('select#department') as any;
//     // const depts = deptDropdown.children();
//     // Object.keys(depts).map(function (key, index) {
//     //   if (index === 0) {
//     //     depts[key].attribs.selected = '';
//     //   }
//     //   if (index === 1) {
//     //     depts[key].attribs.selected = 'selected';
//     //     deptDropdown.attr('value', depts[key].attribs.value);
//     //     // deptDropdown.attribs.value = depts[key].attribs.value;
//     //   }
//     //   if (depts[key].name !== undefined)
//     //     console.log(
//     //       depts[key].name,
//     //       depts[key].type,
//     //       depts[key].attribs.selected,
//     //       depts[key].attribs.value,
//     //       index,
//     //     );
//     // });
//     // await console.log(deptDropdown.value);
//     // await page.click('#slot_view');
//     // console.log(res);
//   } catch (error) {}
// }
