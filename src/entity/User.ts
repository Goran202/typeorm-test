import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
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
