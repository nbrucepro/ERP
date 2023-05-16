import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HolidaySchema } from './holiday.model';
import { HolidayService } from './holiday.service';
import { HolidayController } from './holiday.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'holidaysdb',
        useFactory: () => {
          const schema = HolidaySchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [HolidayService],
  controllers: [HolidayController],
})
export class HolidayModule {}
