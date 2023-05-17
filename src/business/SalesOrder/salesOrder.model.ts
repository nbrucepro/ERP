import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalesOrderDocument = SalesOrder & Document;

@Schema()
export class SalesOrder {
  @Prop()
  name: string;

  @Prop()
  quote: string;

  @Prop()
  status: string;

  @Prop()
  account: string;

  @Prop()
  number: number;

  @Prop()
  opportunity: string;

  @Prop()
  dateOrdered: string;

  @Prop()
  amount: number;

  @Prop()
  billingAddressStreet: string;

  @Prop()
  billingAddressCity: string;

  @Prop()
  billingAddressCounty: string;

  @Prop()
  billingAddressPostalCode: string;

  @Prop()
  billingAddressCountry: string;

  @Prop()
  shippingAddressStreet: string;

  @Prop()
  shippingAddressCity: string;

  @Prop()
  shippingAddressCounty: string;

  @Prop()
  shippingAddressPostalCode: string;

  @Prop()
  shippingAddressCountry: string;

  @Prop()
  billingContact: string;

  @Prop()
  shippingContact: string;

  @Prop()
  tax: string;

  @Prop()
  shippingProvider: string;

  @Prop()
  description: string;

  @Prop()
  itemName: string;

  @Prop()
  itemQty: string;

  @Prop()
  itemTaxRate: string;

  @Prop()
  itemListPrice: string;

  @Prop()
  itemUnitPrice: string;

  @Prop()
  itemCurrency: string;
}

export const SalesOrderSchema = SchemaFactory.createForClass(SalesOrder);
