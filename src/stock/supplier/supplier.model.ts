import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { StockItem } from '../item/items.model';
import mongoose from 'mongoose';

export type SupplierDocument = Supplier & Document;

@Schema()
export class Supplier {
  @Prop()
  name: string;
  @Prop()
  mobile: string;
  @Prop()
  phone: string;
  @Prop()
  address: string;
  @Prop()
  vatNumber: string;
  }

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
