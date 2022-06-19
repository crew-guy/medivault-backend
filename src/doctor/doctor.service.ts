import { Patient } from './../patient/patient.entity';
import { Appointment } from './../appointment/appointment.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Doctor } from './doctor.entity';
import { CreateDoctorDto } from './dto/doctor.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: MongoRepository<Doctor>,
    @InjectRepository(Patient)
    private readonly patientRepository: MongoRepository<Doctor>,
    @InjectRepository(Appointment)
    private readonly appointmentRepository: MongoRepository<Appointment>,
  ) {}

  async findAll(): Promise<Doctor[]> {
    return await this.doctorRepository.find();
  }

  async findDoctorById(id: string): Promise<Doctor> {
    return await this.doctorRepository.findOneBy({ id });
  }

  async getDoctorPatients(id: string) {
    return [];
  }

  async getDoctorAppointments(id: string) {
    return [];
  }

  async createDoctor(data: CreateDoctorDto): Promise<any> {
    return await this.doctorRepository.save({
      ...data,
      uuid: uuidv4(),
    });
  }
}
