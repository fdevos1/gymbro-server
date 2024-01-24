import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutSetController } from './workout_set.controller';
import { WorkoutSetService } from './workout_set.service';

describe('WorkoutSetController', () => {
  let controller: WorkoutSetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkoutSetController],
      providers: [WorkoutSetService],
    }).compile();

    controller = module.get<WorkoutSetController>(WorkoutSetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
