import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { StockItem } from '../item/item.model';
import mongoose from 'mongoose';

export type WarehouseDocument = Warehouse & Document;

@Schema()
export class Warehouse {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'StockItem' }])
  stockItems: StockItem[];
}

export const WarehouseSchema = SchemaFactory.createForClass(Warehouse);
