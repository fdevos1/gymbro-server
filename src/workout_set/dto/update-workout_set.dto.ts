import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutSetDto } from './create-workout_set.dto';

export class UpdateWorkoutSetDto extends PartialType(CreateWorkoutSetDto) {}
