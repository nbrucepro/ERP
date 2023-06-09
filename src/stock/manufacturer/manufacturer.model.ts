import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ManufacturerDocument = Manufacturer & Document;

@Schema()
export class Manufacturer {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const ManufacturerSchema = SchemaFactory.createForClass(Manufacturer);
