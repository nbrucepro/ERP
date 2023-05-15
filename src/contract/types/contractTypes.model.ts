import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContractTypesDocument = ContractTypes & Document;

@Schema()
export class ContractTypes {
  @Prop()
  name: string;
}

export const ContractTypesSchema =
  SchemaFactory.createForClass(ContractTypes);
