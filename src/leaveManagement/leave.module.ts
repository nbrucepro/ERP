import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaveSchema } from './leave.model';
import { LeaveService } from './leave.service';
import { LeaveController } from './leave.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'leave_applicationdb',
          useFactory: () => {
            const schema = LeaveSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [LeaveService],
 controllers: [LeaveController]
})
export class LeaveModule {}
