import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShippingProviderDocument = ShippingProvider & Document;

@Schema()
export class ShippingProvider {
  @Prop()
  name: string;

  @Prop()
  webiste: string;
}

export const ShippingProviderSchema = SchemaFactory.createForClass(ShippingProvider);
