import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobsDocument = Jobs & Document;

@Schema()
export class Jobs {
  @Prop()
  jobTitle: string;
  @Prop()
  designation: string;
  @Prop()
  jobNature: string;
  @Prop()
  experience: string;
  @Prop()
  age: string;
  @Prop()
  salaryRange: string;
  @Prop()
  vacancy: string;
  @Prop()
  postedDate: string;
  @Prop()
  lastDateToApply: string;
  @Prop()
  description: string;
  @Prop()
  status: string;
}

export const JobsSchema = SchemaFactory.createForClass(Jobs);
