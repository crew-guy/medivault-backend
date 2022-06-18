import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

export enum AppointmentStatus {
  PENDING = 'pending',
  RESOLVED = 'resolved',
}

@Entity('reports')
export class Appointment {
  @ObjectIdColumn()
  uuid: ObjectID;

  @Column('varchar')
  patientId: string;

  @Column('varchar')
  doctorId: string;

  @Column('string')
  createdAt: string;

  @Column()
  status: AppointmentStatus;

  @Column('string')
  patientText: string;

  @Column('string', { nullable: true })
  doctorText?: string;
}
