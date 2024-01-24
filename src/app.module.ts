import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ExerciseModule } from './exercise/exercise.module';
import { Exercise } from './exercise/entities/exercise.entity';
import { WorkoutSetModule } from './workout_set/workout_set.module';
import { WorkoutSet } from './workout_set/entities/workout_set.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'gymbro',
      password: 'gymbro_root',
      entities: [Exercise, WorkoutSet],
      synchronize: true,
    }),
    ExerciseModule,
    WorkoutSetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
