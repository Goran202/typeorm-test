import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn
} from "typeorm";
import { User } from "./User";
import { Organization } from "./Organization";

@Entity()
export class User_organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  is_member: boolean;

  @Column()
  is_admin: boolean;

  @OneToOne(type => User)
  // @OneToMany(
  //   type => User,
  //   user => user.id
  // )
  @JoinColumn()
  user: User;

  @OneToOne(type => Organization)
  // @OneToMany(
  //   type => Organization,
  //   organization => organization.id
  // )
  @JoinColumn()
  organization: Organization;
}
