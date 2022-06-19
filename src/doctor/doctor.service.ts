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
    private readonly patientRepository: MongoRepository<Patient>,
    @InjectRepository(Appointment)
    private readonly appointmentRepository: MongoRepository<Appointment>,
  ) {}

  async findAll(): Promise<Doctor[]> {
    return await this.doctorRepository.find();
  }

  async findDoctorById(id: string): Promise<Doctor> {
    return await this.doctorRepository.findOneBy({ id });
  }

  async getDoctorPatients(id: string): Promise<Patient[]> {
    const docAppointments = await this.appointmentRepository.find({
      where: { doctorId: id },
    });
    const docPatientIds = docAppointments.map(
      (appointment: Appointment) => appointment.patientId,
    );
    const docPatients = await Promise.all(
      docPatientIds.map(async (patientId: string) => {
        return await this.patientRepository.findOneBy({ uuid: patientId });
      }),
    );
    return docPatients;
  }

  async getDoctorAppointments(id: string): Promise<Appointment[]> {
    return await this.appointmentRepository.find({
      where: { doctorId: id },
    });
  }

  async createDoctor(data: CreateDoctorDto): Promise<any> {
    return await this.doctorRepository.save({
      ...data,
      uuid: uuidv4(),
    });
  }
}
