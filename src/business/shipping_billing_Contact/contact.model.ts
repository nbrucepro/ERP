import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema()
export class Contact {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  accounts: string;

  @Prop()
  email: string;

  @Prop()
  mobile: string;

  @Prop()
  city: string;

  @Prop()
  description: string;

  @Prop()
  assignedUser: string;

  @Prop()
  teams: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
