import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn
} from "typeorm";
import { User } from "./User";
import { Organization } from "./Organization";

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  length: number;

  @Column()
  count: Number;

  @OneToOne(type => User)
  @JoinColumn()
  user: User;

  @OneToOne(type => Organization)
  @JoinColumn()
  organization: Organization;
}
