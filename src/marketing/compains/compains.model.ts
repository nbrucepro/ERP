import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompainsDocument = Compains & Document;

@Schema()
export class Compains {
  @Prop()
  name: string;

  @Prop() 
  type: string;

  @Prop()
  budget: number;

  @Prop() 
  targetList: string;

  @Prop() 
  description: string;

  @Prop() 
  startDate: string;

  @Prop() 
  endDate: string;

  @Prop() 
  excludingTargetList: string;

  @Prop() 
  assignedUser: string;

  @Prop() 
  teams: string;
}

export const CompainsSchema = SchemaFactory.createForClass(Compains);
