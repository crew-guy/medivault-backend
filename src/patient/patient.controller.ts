import { PatientService } from './patient.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dto/patient.dto';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}
  @Get()
  async findAll(): Promise<Patient[]> {
    console.log('I returned appointments from', process.env.PORT_LISTENING);
    return await this.patientService.findAll();
  }

  @Get('/:patientId')
  async findByPatient(@Param('patientId') patientId: string): Promise<Patient> {
    console.log(patientId);
    return await this.patientService.findPatientById(patientId);
  }

  @Post('/')
  async createPatient(@Body() appointment: CreatePatientDto): Promise<void> {
    return await this.patientService.createPatient(appointment);
  }
}
