import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransferItemDocument = TransferItem & Document;

@Schema()
export class TransferItem {
  @Prop()
  refNo: number;

  @Prop() 
  item: string;

  @Prop() 
  shippingCost: string;

  @Prop() 
  date: string;

  @Prop()
  attachment: string;

  @Prop() 
  from: string;

  @Prop() 
  to: string;

  @Prop()
  status: string;

  @Prop()
  notes: string;
}

export const TransferItemSchema = SchemaFactory.createForClass(TransferItem);
