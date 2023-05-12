import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentSchema } from './department.model';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'departments',
          useFactory: () => {
            const schema = DepartmentSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [DepartmentService],
 controllers: [DepartmentController]
})
export class DepartmentModule {}
