import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TargetListDocument = TargetList & Document;

@Schema()
export class TargetList {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  assignedUser: string;

  @Prop()
  teams: string;

  @Prop()
  sync: boolean;
}

export const TargetListSchema = SchemaFactory.createForClass(TargetList);
