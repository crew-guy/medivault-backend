import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('patients')
export class Patient {
  @ObjectIdColumn()
  uuid: ObjectID;

  @Column('string')
  phoneNumber: string;

  @Column('string')
  name: string;
}
