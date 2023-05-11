import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { StockItem } from '../item/items.model';
import mongoose from 'mongoose';

export type PurchaseDocument = Purchase & Document;

@Schema()
export class Purchase {
  @Prop()
  quantity: number;

  @Prop()
  price: number;

  @Prop()
  date: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'StockItem' })
  stockItem: StockItem;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
