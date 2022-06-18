import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
} from 'typeorm';

export enum MimeType {
  PDF = 'application/pdf',
  NON_PDF = '',
}

export interface FileInterface {
  dataUrl: string;
  thumbnailUrl: string;
  fileMimeType: MimeType;
  uuid?: string;
}

// blood , bone , eye , respiratory, lungs, limbs, nost, ear, throat
export enum BodyParts {
  BLOOD = 'BLOOD',
  BONE = 'BONE',
  EYE = 'EYE',
  RESPIRATORY = 'RESPIRATORY',
  LIMBS = 'LIMBS',
  NOSTRILS = 'NOSTRILS',
  EARS = 'EARS',
  THROAT = 'THROAT',
}

export interface ReportsCollection {
  reports: Report[];
}

export enum ReportType {
  PRESCRIPTION = 'prescription',
  VACCINE = 'vaccine',
  LAB_REPORT = 'lab-report',
  OTHER = 'other',
}

@Entity('reports')
export class Report {
  @ObjectIdColumn()
  uuid: ObjectID;

  @Column('varchar', { nullable: true })
  authorId?: string;

  @Column('varchar')
  date: string;

  @Column()
  tags: (ReportType | string)[];

  @Column('string')
  title: string;

  @Column()
  files: FileInterface[];

  @Column('varchar')
  extractedText?: string;
}
