import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvoiceSchema } from './invoice.model';
import { BusinessInvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'invoice_tbl',
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
  providers: [BusinessInvoiceService],
  controllers: [InvoiceController],
})
export class BusinessInvoiceModule {}
