import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeaveDocument = Leave & Document;

@Schema()
export class Leave {
  @Prop() 
  user: string;

  @Prop()
  category: string;
  
  @Prop() 
  duration: string;
  
  @Prop() 
  startDate: string;
  
  @Prop()
  reason: string;
  
  @Prop() 
  attachment: string;
}

export const LeaveSchema = SchemaFactory.createForClass(Leave);
