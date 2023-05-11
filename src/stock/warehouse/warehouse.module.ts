import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WarehouseController } from './warehouse.controller';
import { WarehouseSchema } from './warehouse.model';
import { WarehouseService } from './warehouse.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'warehouses',
        useFactory: () => {
          const schema = WarehouseSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [WarehouseService],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
