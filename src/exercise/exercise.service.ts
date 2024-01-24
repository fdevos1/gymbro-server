import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Exercise } from './entities/exercise.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise) private exerciseRepo: Repository<Exercise>,
  ) {}

  create(createExerciseDto: CreateExerciseDto) {
    const newExercise = this.exerciseRepo.create({
      name: createExerciseDto.name,
      description: createExerciseDto.description,
      main_muscle: createExerciseDto.main_muscle,
      target_muscle: createExerciseDto.target_muscle,
      tips: createExerciseDto.tips,
    });

    return this.exerciseRepo.save(newExercise);
  }

  async findAll(): Promise<Exercise[]> {
    const allExercises = await this.exerciseRepo.find();

    return allExercises;
  }

  async findOne(id: number): Promise<Exercise | null> {
    const exercise = await this.exerciseRepo.findOneBy({
      id,
    });

    return exercise;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
