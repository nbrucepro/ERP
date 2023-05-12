import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketsDocument = Tickets & Document;

@Schema()
export class Tickets {
  @Prop()
  ticketCode: string;
  @Prop()
  subject: string;
  @Prop()
  reporter: string;
  @Prop()
  projects: string;
  @Prop()
  priority: string;
  @Prop()
  department: string;
  @Prop()
  tags: string;
  @Prop()
  attachments: string;
  @Prop()
  ticketMessage: string;
}

export const TicketsSchema = SchemaFactory.createForClass(Tickets);
