import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaxSchema } from './tax.model';
import { TaxService } from './tax.service';
import { TaxController } from './tax.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'taxes_tbl',
        useFactory: () => {
          const schema = TaxSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [TaxService],
  controllers: [TaxController],
})
export class TaxModule {}
