import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminationTypesSchema } from './terminationTypes.model';
import { TerminationTypesService } from './terminationTypes.service';
import { TerminationTypesController } from './terminationTypes.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'termination_typesdb',
        useFactory: () => {
          const schema = TerminationTypesSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [TerminationTypesService],
  controllers: [TerminationTypesController],
})
export class TerminationTypesModule {}
