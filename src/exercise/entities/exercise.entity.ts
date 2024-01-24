import { WorkoutSet } from 'src/workout_set/entities/workout_set.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum ExerciseMainMuscles {
  CORE = 'CORE',
  ARMS = 'ARMS',
  BACK = 'BACK',
  CHEST = 'CHEST',
  SHOULDERS = 'SHOULDERS',
  LEGS = 'LEGS',
}

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  main_muscle: ExerciseMainMuscles;

  @Column()
  target_muscle: string;

  @Column({ nullable: true })
  quantity: number;

  @Column('text', { array: true })
  tips: string[];

  @OneToMany((type) => WorkoutSet, (set) => set.id)
  sets: WorkoutSet[];
}
