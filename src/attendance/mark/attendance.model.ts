import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AttendanceDocument = Attendance & Document;

@Schema()
export class Attendance {
  @Prop()
  employee: string;

  @Prop()
  attended: boolean;

  @Prop()
  date: string;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
