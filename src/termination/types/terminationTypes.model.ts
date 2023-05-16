import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TerminationTypesDocument = TerminationTypes & Document;

@Schema()
export class TerminationTypes {
  @Prop()
  name: string;

  @Prop()
  description:string;
}

export const TerminationTypesSchema =
  SchemaFactory.createForClass(TerminationTypes);
