import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion {
  @Prop() 
  employee: string;

  @Prop()
  designation: string;

  @Prop()
  promotionTitle: string;

  @Prop()
  promotionDate: string;

  @Prop()
  description: string;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);
