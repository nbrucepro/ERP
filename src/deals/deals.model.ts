import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DealsDocument = Deals & Document;

@Schema()
export class Deals {
  @Prop()
  title: string;

  @Prop()
  dealValue: string;

  @Prop()
  source: string;

  @Prop() 
  closeDate: string;

  @Prop()
  pipeline: string;

  @Prop() 
  clientName: string;

  @Prop()
  dealOwner: string;

  @Prop()
  assigne: string;

  @Prop()
  tags: string;
}

export const DealsSchema = SchemaFactory.createForClass(Deals);
