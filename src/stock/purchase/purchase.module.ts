import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseController } from './purchase.controller';
import { PurchaseSchema } from './purchase.model';
import { PurchaseService } from './purchase.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'purchased_itemsdb',
        useFactory: () => {
          const schema = PurchaseSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [PurchaseService],
  controllers: [PurchaseController],
})
export class PurchaseModule {}
