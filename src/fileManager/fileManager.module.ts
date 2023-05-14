import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartmentSchema } from './fileManager.model';
import { DepartmentService } from './fileManager.service';
import { DepartmentController } from './fileManager.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'fileManager',
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
export class FileManagerModule {}
