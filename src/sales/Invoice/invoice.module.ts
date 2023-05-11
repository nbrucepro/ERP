import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceSchema } from './invoice.model';
import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'invoice',
          useFactory: () => {
            const schema = InvoiceSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [InvoiceService],
 controllers: [InvoiceController]
})
export class InvoiceModule {}
