import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrainingDocument = Training & Document;

@Schema()
export class Training {
  @Prop()
  Employee: string;
  @Prop() 
  Course : string;
  @Prop()
  Vendor: string;
  @Prop()
  startDate: string;
  @Prop()
  finishDate: string;
  @Prop()
  trainingCost: number;
  @Prop()
  status: string;
  @Prop()
  performance: string;
  @Prop()
  remarks: string;
  @Prop()
  Attachment: string;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);
