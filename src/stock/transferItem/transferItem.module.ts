import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransferItemController } from './transferItem.controller';
import { TransferItemSchema } from './transferItem.model';
import { TransferItemService } from './transferItem.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'transfered_itemsdb',
        useFactory: () => {
          const schema = TransferItemSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [TransferItemService],
  controllers: [TransferItemController],
})
export class TransferItemModule {}
