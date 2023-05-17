import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalesOrderSchema } from './salesOrder.model';
import { SalesOrderService } from './salesOrder.service';
import { SalesOrderController } from './salesOrder.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'sales_order_tbl',
        useFactory: () => {
          const schema = SalesOrderSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [SalesOrderService],
  controllers: [SalesOrderController],
})
export class SalesOrderModule {}
