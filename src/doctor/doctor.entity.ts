import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('doctors')
export class Doctor {
  @ObjectIdColumn()
  uuid: ObjectID;

  @Column('string')
  qualification: string;

  @Column('string')
  imgUrl: string;

  @Column('string')
  experience: string;
}
