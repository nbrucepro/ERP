import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectsDocument = Projects & Document;

@Schema()
export class Projects {
  @Prop()
  projectsNo: number;

  @Prop()
  projectName: string;

  @Prop()
  projectCategory: string;

  @Prop()
  projectClient: string;

  @Prop()
  progress: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop() 
  billingType: string;

  @Prop()
  fixedPrice: string;

  @Prop()
  hourlyRate: string;

  @Prop()
  estimateHours: string;

  @Prop()
  status: string;

  @Prop()
  demoUrl: string;

  @Prop() 
  tags: string;

  @Prop() 
  description: string;
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);
