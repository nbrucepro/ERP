import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HourlySchema } from './hourly.template.model';
import { HourlyService } from './hourly.template.service';
import { HourlyController } from './hourly.template.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'hourly_template',
          useFactory: () => {
            const schema = HourlySchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [HourlyService],
 controllers: [HourlyController]
})
export class HourlyModule {}
