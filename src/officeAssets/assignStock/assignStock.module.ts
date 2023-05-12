import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignStockSchema } from './assignStock.model';
import { AssignStockService } from './assignStock.service';
import { AssignStockController } from './assignStock.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'assign_stockdb',
        useFactory: () => {
          const schema = AssignStockSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [AssignStockService],
  controllers: [AssignStockController],
})
export class OfficeAssignStockModule {}
