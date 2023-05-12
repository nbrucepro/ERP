import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockSchema } from './stock.model';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'office_assets_stock',
        useFactory: () => {
          const schema = StockSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [StockService],
  controllers: [StockController],
})
export class OfficeStockModule {}
