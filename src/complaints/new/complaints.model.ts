import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ComplaintsDocument = Complaints & Document;

@Schema()
export class Complaints {
  @Prop()
  complaintCode: string;

  @Prop()
  description: string;

  @Prop()
  client: string;

  @Prop()
  type: string;

  @Prop()
  complaintDate: string;

  @Prop()
  dueDate: string;

  @Prop()
  attachment: string;

  @Prop()
  procedureToSolve: string;

  @Prop()
  Status: string;
}

export const ComplaintsSchema = SchemaFactory.createForClass(Complaints);
