import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResignationDocument = Resignation & Document;

@Schema()
export class Resignation {
  @Prop()
  employeeName: string;

  @Prop()
  resignationDate: string;

  @Prop()
  lastResignationDate: string;

  @Prop()
  description: string;
}

export const ResignationSchema = SchemaFactory.createForClass(Resignation);
