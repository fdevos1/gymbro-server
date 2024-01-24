import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WorkoutSet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column()
  kg: number;

  @Column()
  reps: number;

  @Column()
  created_at: Date;
}
