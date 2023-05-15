import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComplaintsTypesSchema } from './complaintsTypes.model';
import { ComplaintsTypesService } from './complaintsTypes.service';
import { ComplaintsTypesController } from './complaintsTypes.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'complaint_typesdb',
        useFactory: () => {
          const schema = ComplaintsTypesSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [ComplaintsTypesService],
  controllers: [ComplaintsTypesController],
})
export class ComplaintsTypesModule {}
