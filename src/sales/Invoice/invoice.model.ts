import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InvoiceDocument = Invoice & Document;
@Schema()
export class Invoice {
  @Prop()
  refNo: string;
  @Prop()
  clients: string;
  @Prop()
  projects: string;
  @Prop()
  invoiceDate: string;
  @Prop()
  dueDate: string;
  @Prop()
  discountType: string;
  @Prop()
  warehouse: string;
  @Prop()
  tags: string;
  @Prop()
  salesAgent: string;
  @Prop()
  allowPaypal: boolean;
  @Prop()
  allowStripe: boolean;
  @Prop()
  allowAuthorizenet: boolean;
  @Prop()
  allowCcavenue: boolean;
  @Prop()
  allowBraintree: boolean;
  @Prop()
  allowMollie: boolean;
  @Prop()
  allowPayumoney: boolean;
  @Prop()
  notes: string;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
