import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainingSchema } from './training.model';
import { TrainingService } from './Training.service';
import { TrainingController } from './training.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'trainings',
          useFactory: () => {
            const schema = TrainingSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [TrainingService],
 controllers: [TrainingController]
})
export class TrainingModule {}
