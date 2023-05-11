import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HourlyDocument = Hourly & Document;

@Schema()
export class Hourly {
  @Prop()
  hourlyGrade : number;
  @Prop()
  hourlyRate: number;

}

export const HourlySchema = SchemaFactory.createForClass(Hourly);
