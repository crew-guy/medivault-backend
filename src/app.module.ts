import { DoctorModule } from './doctor/doctor.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ReportModule } from './report/report.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 20,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      port: 27017,
      // TODO : insert mongo connection string
      url: process.env.MONGO_CONNECTION_STRING,
      useNewUrlParser: true,
      keepConnectionAlive: true,
      // Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    ReportModule,
    DoctorModule,
    PatientModule,
    AppointmentModule,
    PatientModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
