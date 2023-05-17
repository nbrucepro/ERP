import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShippingProviderSchema } from './shippingProvider.model';
import { ShippingProviderService } from './shippingProvider.service';
import { ShippingProviderController } from './shippingProvider.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'shipping_provider_tbl',
        useFactory: () => {
          const schema = ShippingProviderSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [ShippingProviderService],
  controllers: [ShippingProviderController],
})
export class ShippingProviderModule {}
