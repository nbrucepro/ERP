import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TimeChangeRequestDocument = TimeChangeRequest & Document;

@Schema()
export class TimeChangeRequest {
  @Prop()
  dateIn: string;

  @Prop()
  clockIn: string;

  @Prop()
  dateOut: string;

  @Prop()
  clockOut: string;
}

export const TimeChangeRequestSchema = SchemaFactory.createForClass(TimeChangeRequest);
