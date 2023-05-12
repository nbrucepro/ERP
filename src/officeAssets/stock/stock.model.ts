import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StockDocument = Stock & Document;

@Schema()
export class Stock {
  @Prop()
  stock_category: string;

  @Prop()
  buying_date: string;

  @Prop()
  item_name: string;

  @Prop()
  inventory: string;
}

export const StockSchema = SchemaFactory.createForClass(Stock);
