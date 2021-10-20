import { IUser } from '@modules/entities/User/IUser';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export default class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  document: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;

  //@OneToMany(() => Movement, movement => movement.account)
  //movements: Movement[];
}
