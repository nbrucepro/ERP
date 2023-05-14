import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PurchaseDocument = Purchase & Document;

@Schema()
export class Purchase {
  @Prop()
  refNo: number;

  @Prop()
  supplier: string;

  @Prop()
  purchaseDate: string;

  @Prop()
  dueDate: string;

  @Prop()
  warehouse: string;

  @Prop()
  user: string;

  @Prop()
  purchaseAgent: string;

  @Prop()
  updateStock: string;

  @Prop()
  item: string;

  @Prop()
  discountType: string;

  @Prop()
  tags: string;

  @Prop()
  notes: string;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
