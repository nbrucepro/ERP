import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientsDocument = Clients & Document;

@Schema()
export class Clients {
  @Prop() 
  companyName: string;
  @Prop()
  companyEmail: string;
  @Prop()
  companyVat: string;
  @Prop()
  customerGroup: string;
  @Prop()
  language: string;
  @Prop()
  currency: string;
  @Prop()
  receivesmsNotifications: boolean;
  @Prop()
  shortNote: string;
}

export const ClientsSchema = SchemaFactory.createForClass(Clients);
