import { Module } from '@nestjs/common';
import { WorkoutSetService } from './workout_set.service';
import { WorkoutSetController } from './workout_set.controller';

@Module({
  controllers: [WorkoutSetController],
  providers: [WorkoutSetService],
})
export class WorkoutSetModule {}
