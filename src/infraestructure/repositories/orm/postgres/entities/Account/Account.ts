import { IAccount } from '@modules/entities/Account/IAccount';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Movement from '../Movement/Movement';

@Entity('account')
export default class Account implements IAccount {
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

  @OneToMany(() => Movement, movement => movement.account)
  movements: Movement[];
}
