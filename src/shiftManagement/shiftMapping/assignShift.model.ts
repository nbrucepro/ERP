import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AssignShiftDocument = AssignShift & Document;

@Schema()
export class AssignShift {
  @Prop()
  employeeName: string;

  @Prop()
  shiftName: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;
}

export const AssignShiftSchema = SchemaFactory.createForClass(AssignShift);
