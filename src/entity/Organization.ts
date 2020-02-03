import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Location } from "./Location";

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  // @OneToOne(
  //   type => Location,
  //   location => location.organization
  // )
  // location: Location;
}
