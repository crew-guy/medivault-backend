import { Appointment } from 'src/appointment/appointment.entity';
import { Patient } from './../patient/patient.entity';
import { DoctorService } from './doctor.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Doctor } from './doctor.entity';
import { CreateDoctorDto } from './dto/doctor.dto';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}
  @Get()
  async findAll(): Promise<Doctor[]> {
    console.log('I returned appointments from', process.env.PORT_LISTENING);
    return await this.doctorService.findAll();
  }

  @Get('/:doctorId')
  async findByDoctor(@Param('doctorId') doctorId: string): Promise<Doctor> {
    return await this.doctorService.findDoctorById(doctorId);
  }

  @Get('/:doctorId/patients')
  async getDoctorPatients(
    @Param('doctorId') doctorId: string,
  ): Promise<Patient[]> {
    return await this.doctorService.getDoctorPatients(doctorId);
  }

  @Get('/:doctorId/appointments')
  async getDoctorAppointments(
    @Param('doctorId') doctorId: string,
  ): Promise<Appointment[]> {
    return await this.doctorService.getDoctorAppointments(doctorId);
  }

  @Post('/')
  async createDoctor(@Body() appointment: CreateDoctorDto): Promise<void> {
    return await this.doctorService.createDoctor(appointment);
  }
}
