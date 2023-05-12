import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BankAccountDocument = BankAccount & Document;

@Schema()
export class BankAccount {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  initialBalance: number;
  @Prop()
  accontNumber: number;
  @Prop()
  contactPerson: string;
  @Prop()
  phone: string;
  @Prop()
  bankDetails: string;
}

export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);
