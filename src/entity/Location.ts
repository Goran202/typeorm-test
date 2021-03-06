import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn
} from "typeorm";
import { Organization } from "./Organization";

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  radius: number;

  @OneToOne(type => Organization)
  @JoinColumn()
  organization: Organization;
}
