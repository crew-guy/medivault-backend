import { AppointmentService } from './appointment.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Appointment } from './appointment.entity';
import {
  CreateAppointmentDto,
  ResolveAppointmentDto,
} from './dto/appointment.dto';

@Controller('appointments')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}
  @Get()
  async findAll(): Promise<Appointment[]> {
    console.log('I returned appointments from', process.env.PORT_LISTENING);
    return await this.appointmentService.findAll();
  }
  @Get('test')
  async testRes(): Promise<{ message: string }> {
    return { message: `Responding from ${process.env.PORT_LISTENING}` };
  }

  @Get('/:patientId')
  async findByPatient(@Param() params): Promise<Appointment[]> {
    return await this.appointmentService.findByPatient(params.authorId);
  }

  @Get('/:doctorId')
  async findByDoctor(@Param() params): Promise<Appointment[]> {
    return await this.appointmentService.findByDoctor(params.authorId);
  }

  @Post('/:appointmentId/:doctorId')
  async resolveByDoctor(
    @Param() params,
    @Body() { doctorText }: ResolveAppointmentDto,
  ): Promise<Appointment[]> {
    return await this.appointmentService.resolveAppointmentByDoctor(
      params.doctorId,
      doctorText,
    );
  }

  @Post('/:patientId')
  async createAppointment(
    @Body() appointment: CreateAppointmentDto,
  ): Promise<void> {
    return await this.appointmentService.createAppointment(appointment);
  }
}
