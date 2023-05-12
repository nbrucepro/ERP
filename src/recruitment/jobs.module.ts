import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsSchema } from './jobs.model';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'jobsdb',
        useFactory: () => {
          const schema = JobsSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [JobsService],
  controllers: [JobsController],
})
export class JobsModule {}
