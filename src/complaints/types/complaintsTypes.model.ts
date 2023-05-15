import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ComplaintsTypesDocument = ComplaintsTypes & Document;

@Schema()
export class ComplaintsTypes {
  @Prop()
  name: string;
}

export const ComplaintsTypesSchema =
  SchemaFactory.createForClass(ComplaintsTypes);
