import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BugsDocument = Bugs & Document;

@Schema()
export class Bugs {
  @Prop()
  issue: string;

  @Prop()
  bugTitle: string;

  @Prop()
  relatedTo: string;

  @Prop()
  reporter: string;

  @Prop()
  priority: string;

  @Prop()
  assignedTo: string;

  @Prop()
  description: string;

  @Prop()
  severity: string;

  @Prop()
  bugStatus: string;

  @Prop()
  reproducibility: string;
}

export const BugsSchema = SchemaFactory.createForClass(Bugs);
