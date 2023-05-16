import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HolidayDocument = Holiday & Document;

@Schema()
export class Holiday {
  @Prop() 
  eventName: string;

  @Prop()
  description: string;

  @Prop() 
  startDate: string;

  @Prop() 
  endDate: string;

  @Prop() 
  location: string;
}

export const HolidaySchema = SchemaFactory.createForClass(Holiday);
