import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeChangeRequestSchema } from './timeChangeRequest.model';
import { TimeChangeRequestService } from './timeChangeRequest.service';
import { TimeChangeRequestController } from './timeChangeRequest.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'timeChangeRequestsdb',
        useFactory: () => {
          const schema = TimeChangeRequestSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [TimeChangeRequestService],
  controllers: [TimeChangeRequestController],
})
export class TimeChangeRequestModule {}
