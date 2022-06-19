import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dto/patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: MongoRepository<Patient>,
  ) {}

  async findAll(): Promise<Patient[]> {
    return await this.patientRepository.find();
  }

  async findPatientById(id: string): Promise<Patient> {
    return await this.patientRepository.findOneById(id);
  }

  async createPatient(data: CreatePatientDto): Promise<any> {
    return await this.patientRepository.save({
      ...data,
      uuid: uuidv4(),
    });
  }
}
