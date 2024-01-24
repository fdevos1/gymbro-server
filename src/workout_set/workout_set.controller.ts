import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutSetService } from './workout_set.service';
import { CreateWorkoutSetDto } from './dto/create-workout_set.dto';
import { UpdateWorkoutSetDto } from './dto/update-workout_set.dto';

@Controller('workout-set')
export class WorkoutSetController {
  constructor(private readonly workoutSetService: WorkoutSetService) {}

  @Post()
  create(@Body() createWorkoutSetDto: CreateWorkoutSetDto) {
    return this.workoutSetService.create(createWorkoutSetDto);
  }

  @Get()
  findAll() {
    return this.workoutSetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workoutSetService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutSetDto: UpdateWorkoutSetDto) {
    return this.workoutSetService.update(+id, updateWorkoutSetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workoutSetService.remove(+id);
  }
}
