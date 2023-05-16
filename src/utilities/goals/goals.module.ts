import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GoalsSchema } from './goals.model';
import { GoalsService } from './goals.service';
import { GoalsController } from './goals.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'goalsdb',
        useFactory: () => {
          const schema = GoalsSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [GoalsService],
  controllers: [GoalsController],
})
export class GoalsModule {}
