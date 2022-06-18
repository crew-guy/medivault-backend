import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as fs from 'fs'
// import * as path from 'path';

// const httpsOptions = {
//   key: fs.readFileSync(path.join(__dirname,'./secrets/private-key.pem')),
//   cert: fs.readFileSync(path.join(__dirname,'./secrets/public-certificate.pem')),
// };
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
