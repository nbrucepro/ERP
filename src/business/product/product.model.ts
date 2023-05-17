import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  status: string;

  @Prop()
  category: string;

  @Prop()
  brand: string;

  @Prop()
  teams: string;

  @Prop()
  costPrice: string;

  @Prop()
  pricingType: string;

  @Prop()
  listPrice: string;

  @Prop()
  unitPrice: string;

  @Prop()
  taxFree: string;

  @Prop()
  partNumber: string;

  @Prop()
  weight: string;

  @Prop()
  url: string;

  @Prop()
  photo: string;

  @Prop()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
