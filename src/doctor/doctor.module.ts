import { Patient } from './../patient/patient.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from 'src/appointment/appointment.entity';
import { DoctorController } from './doctor.controller';
import { Doctor } from './doctor.entity';
import { DoctorService } from './doctor.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Doctor]),
    TypeOrmModule.forFeature([Appointment]),
    TypeOrmModule.forFeature([Patient]),
  ],
  providers: [DoctorService],
  controllers: [DoctorController],
})
export class DoctorModule {}
