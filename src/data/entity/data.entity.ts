// data.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  field: string;
}
