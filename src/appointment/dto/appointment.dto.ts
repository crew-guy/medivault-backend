export class CreateAppointmentDto {
  // Phone number field will exist on a report only if reports are stored in a separate database and users in another database
  patientId: string;
  doctorId: string;
  patientText: string;
  createdAt: string;
}

export class ResolveAppointmentDto {
  // Phone number field will exist on a report only if reports are stored in a separate database and users in another database
  doctorText: string;
}
