import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Purchase } from '../purchase/purchase.schema';
import { Supplier } from '../supplier/supplier.model';
import { Warehouse } from '../warehouse/warehouse.model';
import mongoose from 'mongoose';

export type StockItemDocument = StockItem & Document;
@Schema()
export class StockItem {
  @Prop()
  itemName: string;

  @Prop()
  code: string;

  @Prop()
  barcodeSymbology: string;

  @Prop()
  Manufacturer: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'warehouses' })
  warehouse: Warehouse;

  @Prop()
  costPrice: number;

  @Prop()
  salesPrice: number;

  @Prop()
  unitType: string;

  @Prop()
  quantity: number;

  @Prop()
  itemGroup: string;

  @Prop()
  tax: number;
}

export const StockItemSchema = SchemaFactory.createForClass(StockItem);
