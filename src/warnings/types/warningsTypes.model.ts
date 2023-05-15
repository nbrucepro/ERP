import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WarningsTypesDocument = WarningsTypes & Document;

@Schema()
export class WarningsTypes {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const WarningsTypesSchema =
  SchemaFactory.createForClass(WarningsTypes);
