import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WarningsDocument = Warnings & Document;

@Schema()
export class Warnings {
  @Prop()
  warningBy: string;

  @Prop()
  warningTo: string;

  @Prop()
  warningType: string;

  @Prop()
  attachment: string;

  @Prop()
  warningDate: string;

  @Prop() 
  description: string;
}

export const WarningsSchema = SchemaFactory.createForClass(Warnings);
