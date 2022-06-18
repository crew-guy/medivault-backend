import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from '@notionhq/client';

@Injectable()
export class NotionService {
  constructor(private configService: ConfigService) {}
  databaseId = this.configService.get<string>('DB_ID');
  // Initializing a client
  notion = new Client({
    auth: this.configService.get<string>('NOTION_TOKEN'),
  });
  async getCourseDb() {
    const response = await this.notion.databases.query({
      database_id: this.databaseId,
    });
    return response;
  }

  //TODO : add type safety
  async getCoursesByDept(deptId: string): Promise<any> {
    const response = await this.notion.databases.query({
      database_id: this.databaseId,
      filter: {
        property: 'dept_code',
        select: {
          equals: deptId,
        },
      },
    });
    //TODO : add type safety
    const firstRes: any = response.results[0];
    const prerequisites = firstRes.properties.prerequisites.relation.map(
      (re: any) => re.id,
    );
    const name = firstRes.properties.name.rich_text[0].plain_text;
    const deptCode = firstRes.properties.dept_code.select.name;
    const courseId = firstRes.properties.course_id.title[0].plain_text;
    return { name, deptCode, courseId, prerequisites };
  }
}
