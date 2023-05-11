import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockItemSchema } from './item.model';
import { StockItemService } from './items.service';
import { StockItemController } from './items.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'stockItems',
          useFactory: () => {
            const schema = StockItemSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [StockItemService],
 controllers: [StockItemController]
})
export class ItemsModule {}
