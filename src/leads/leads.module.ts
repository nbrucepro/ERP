import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeadsSchema } from './leads.model';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'leadsdb',
        useFactory: () => {
          const schema = LeadsSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [LeadsService],
  controllers: [LeadsController],
})
export class LeadsModule {}
