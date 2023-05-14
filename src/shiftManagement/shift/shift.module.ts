import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShiftSchema } from './shift.model';
import { ShiftService } from './shift.service';
import { ShiftController } from './shift.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'shifts',
          useFactory: () => {
            const schema = ShiftSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [ShiftService],
 controllers: [ShiftController]
})
export class ShiftModule {}
