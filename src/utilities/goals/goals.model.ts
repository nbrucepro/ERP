import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GoalsDocument = Goals & Document;

@Schema()
export class Goals {
  @Prop() 
  subject: string;

  @Prop() 
  goalType: string;

  @Prop()
  targetAchievement: string;

  @Prop() 
  startDate: string;

  @Prop() 
  endDate: string;

  @Prop()
  description: string;
}

export const GoalsSchema = SchemaFactory.createForClass(Goals);
