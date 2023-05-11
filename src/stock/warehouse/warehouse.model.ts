import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WarehouseDocument = Warehouse & Document;

@Schema()
export class Warehouse {
  @Prop()
  warehouseCode: number;

  @Prop()
  warehouseName: string;

  @Prop()
  phone: number
  
  @Prop()
  mobile: number

  @Prop()
  email: string

  @Prop()
  image: string

  @Prop()
  status: string
}

export const WarehouseSchema = SchemaFactory.createForClass(Warehouse);
