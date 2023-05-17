import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaxDocument = Tax & Document;

@Schema()
export class Tax {
  @Prop()
  name: string;

  @Prop()
  rate: string;
}

export const TaxSchema = SchemaFactory.createForClass(Tax);
