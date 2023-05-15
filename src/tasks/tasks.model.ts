import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TasksDocument = Tasks & Document;

@Schema()
export class Tasks {
  @Prop()
  taskName: string;

  @Prop()
  selectCategory: string;

  @Prop()
  relatedTo: string;

  @Prop()
  startDate: string;

  @Prop()
  dueDate: string;

  @Prop()
  assignedTo: string;

  @Prop()
  hourlRate: string;

  @Prop()
  estimatedHour: string;

  @Prop()
  progress: string;

  @Prop()
  taskStatus: string;

  @Prop() 
  tags: string;

  @Prop()
  billable: string;

  @Prop() 
  taskDescription: string;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
