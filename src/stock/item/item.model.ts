import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Purchase } from '../purchase/purchase.schema';
import { Supplier } from '../supplier/supplier.schema';
import { Warehouse } from '../warehouse/warehouse.schema';
import mongoose from 'mongoose';

export type StockItemDocument = StockItem & Document;
@Schema()
export class StockItem {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  quantity: number;

  @Prop()
  price: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' })
  supplier: Supplier;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse' })
  warehouse: Warehouse;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' }])
  purchases: Purchase[];
}

export const StockItemSchema = SchemaFactory.createForClass(StockItem);
