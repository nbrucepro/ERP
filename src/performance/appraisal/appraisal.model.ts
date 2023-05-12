import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppraisalDocument = Appraisal & Document;

@Schema()
export class Appraisal {
  @Prop()
  employeeName: string;

  @Prop()
  month: string;

  @Prop()
  description: string;
}

export const AppraisalSchema = SchemaFactory.createForClass(Appraisal);
