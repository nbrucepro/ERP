import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalarySchema } from './salary.template.model';
import { SalaryService } from './salary.template.service';
import { SalaryController } from './salary.template.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'salary',
          useFactory: () => {
            const schema = SalarySchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [SalaryService],
 controllers: [SalaryController]
})
export class SalaryModule {}
