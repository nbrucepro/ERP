import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TerminationDocument = Termination & Document;

@Schema()
export class Termination {
  @Prop()
  employeeName: string;

  @Prop()
  terminationType: string;

  @Prop()
  attachment: string;

  @Prop()
  noticeDate: string;

  @Prop()
  terminationDate: string;

  @Prop()
  description: string;
}

export const TerminationSchema = SchemaFactory.createForClass(Termination);
