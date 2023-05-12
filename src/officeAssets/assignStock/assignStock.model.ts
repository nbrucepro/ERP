import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AssignStockDocument = AssignStock & Document;

@Schema()
export class AssignStock {
  @Prop() 
  assign_stock_category: string;

  @Prop() 
  item_name: string;

  @Prop() 
  employee_name: string;

  @Prop() 
  inventory: string;

  @Prop()
  assign_quantity: string;

  @Prop() 
  assign_date: string;
  
}

export const AssignStockSchema = SchemaFactory.createForClass(AssignStock);
