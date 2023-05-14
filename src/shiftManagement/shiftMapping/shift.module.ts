import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignShiftSchema } from './assignShift.model';
import { AssignShiftService } from './assignShift.service';
import { AssignShiftController } from './assignShift.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'assignshiftsdb',
          useFactory: () => {
            const schema = AssignShiftSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [AssignShiftService],
 controllers: [AssignShiftController]
})
export class AssignShiftModule {}
