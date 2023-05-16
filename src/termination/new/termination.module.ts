import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminationSchema } from './termination.model';
import { TerminationService } from './termination.service';
import { TerminationController } from './termination.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'terminationsdb',
        useFactory: () => {
          const schema = TerminationSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [TerminationService],
  controllers: [TerminationController],
})
export class TerminationModule {}
