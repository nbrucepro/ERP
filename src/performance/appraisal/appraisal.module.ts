import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppraisalSchema } from './appraisal.model';
import { AppraisalService } from './appraisal.service';
import { AppraisalController } from './appraisal.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'appraisals',
          useFactory: () => {
            const schema = AppraisalSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [AppraisalService],
 controllers: [AppraisalController]
})
export class AppraisalModule {}
