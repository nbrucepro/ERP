import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeadsDocument = Leads & Document;

@Schema()
export class Leads {
  @Prop() 
  title: string;
  @Prop() 
  organization: string;
  @Prop() 
  contactName: string;
  @Prop() 
  phone: string;
  @Prop() 
  city: string;
  @Prop() 
  country: string;
  @Prop() 
  language: string;
  @Prop() 
  skypeId: string;
  @Prop() 
  contactedToday: string;
  @Prop() 
  tags: string;
  @Prop()
  shortNote: string;
  @Prop() 
  leadStatus: string;
  @Prop()
  leadSource: string;
  @Prop()
  email: string;
  @Prop()
  mobile: number;
  @Prop()
  state: string;
  @Prop()
  address: string;
  @Prop() 
  twitter: string;
  @Prop()
  facebook: string;
}

export const LeadsSchema = SchemaFactory.createForClass(Leads);
