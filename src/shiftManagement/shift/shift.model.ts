import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShiftDocument = Shift & Document;

@Schema()
export class Shift {
  @Prop()
  shiftName: string;

  @Prop() 
  startTime: string;

  @Prop()
  minutebeforetheshiftstarts: string;

  @Prop()  
  lunchTime: string;

  @Prop() 
  startDate: string;

  @Prop()
  employeeName: string;

  @Prop()
  status: string;

  @Prop() 
  endTime: string;

  @Prop()
  minuteaftertheshiftends: string;

  @Prop() 
  endDate: string;
}

export const ShiftSchema = SchemaFactory.createForClass(Shift);
