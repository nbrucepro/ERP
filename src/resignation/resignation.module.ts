import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResignationSchema } from './resignation.model';
import { ResignationService } from './resignation.service';
import { ResignationController } from './resignation.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'resignationsdb',
        useFactory: () => {
          const schema = ResignationSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [ResignationService],
  controllers: [ResignationController],
})
export class ResignationModule {}
