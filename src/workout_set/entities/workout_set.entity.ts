import { Exercise } from 'src/exercise/entities/exercise.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Exercise, (exercise) => exercise.name)
  exercise: Exercise;
}
