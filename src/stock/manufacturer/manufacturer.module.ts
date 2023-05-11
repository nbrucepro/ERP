import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManufacturerSchema } from './manufacturer.model';
import { ManufacturerService } from './Manufacturer.service';
import { ManufacturerController } from './manufacturer.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'manufacturers',
          useFactory: () => {
            const schema = ManufacturerSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [ManufacturerService],
 controllers: [ManufacturerController]
})
export class ManufacturerModule {}
