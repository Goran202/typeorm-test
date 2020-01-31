import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Organization } from "./Organization";

@Entity()
export class Location {
  @PrimaryColumn()
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
