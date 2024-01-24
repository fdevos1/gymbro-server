import { ExerciseMainMuscles } from '../entities/exercise.entity';

export class CreateExerciseDto {
  readonly name: string;
  readonly description: string;
  readonly main_muscle: ExerciseMainMuscles;
  readonly target_muscle: string;
  readonly tips: string[];
}
