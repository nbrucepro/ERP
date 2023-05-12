import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IndicatorsSchema } from './indicators.model';
import { IndicatorsService } from './indicators.service';
import { IndicatorsController } from './indicators.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'indicatorsdb',
        useFactory: () => {
          const schema = IndicatorsSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [IndicatorsService],
  controllers: [IndicatorsController],
})
export class IndicatorsModule {}
