import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Appointment, AppointmentStatus } from './appointment.entity';
import { CreateAppointmentDto } from './dto/appointment.dto';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: MongoRepository<Appointment>,
  ) {}

  async findAll(): Promise<Appointment[]> {
    return await this.appointmentRepository.find();
  }

  async findOneById(id: string): Promise<Appointment> {
    return await this.appointmentRepository.findOneById(id);
  }

  async resolveAppointmentByDoctor(
    id: string,
    doctorText: string,
  ): Promise<any> {
    return await this.appointmentRepository.findOneAndUpdate(
      { uuid: id },
      {
        status: AppointmentStatus.RESOLVED,
        doctorText: doctorText,
      },
    );
  }

  async findByPatient(patientId: string): Promise<Appointment[]> {
    return await this.appointmentRepository.find({
      where: {
        patientId: patientId,
      },
    });
  }

  async findByDoctor(doctorId: string): Promise<Appointment[]> {
    return await this.appointmentRepository.find({
      where: {
        doctorId: doctorId,
      },
    });
  }

  async createAppointment(data: CreateAppointmentDto): Promise<any> {
    return await this.appointmentRepository.save({
      ...data,
      uuid: uuidv4(),
      status: AppointmentStatus.PENDING,
    });
  }
}
