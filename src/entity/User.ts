import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  nick: string;

  @Column()
  stravaUserName: string;

  @Column()
  is_superadmin: boolean;
}
