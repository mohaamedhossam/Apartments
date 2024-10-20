import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "apartments" })
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  unitNumber: string;

  @Column()
  project: string;

  @Column("text", { default: "" })
  description?: string;

  @Column()
  location: string;

  @Column("integer")
  price: number;

  @Column({ default: true })
  available: boolean;
}
