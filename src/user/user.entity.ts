import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity('users')
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column('varchar', { length: 8 })
  rollNumber: string;

  @Column()
  phoneNumber?: string;
  @Column()
  isPrivacyOpen?: boolean;
  // TODO :Add one-to-many mapping between course & user
}
