import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DealsSchema } from './deals.model';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'dealsdb',
        useFactory: () => {
          const schema = DealsSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [DealsService],
  controllers: [DealsController],
})
export class DealsModule {}
