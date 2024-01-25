import { Exercise } from 'src/exercise/entities/exercise.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Exercise,
    (exercise) => {
      const exerciseInfos = {
        name: exercise.name,
        sets: exercise.sets,
      };
      return exerciseInfos;
    },
  )
  exercise: Exercise[];

  @Column()
  total_time: number;
}
