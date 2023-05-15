import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContractDocument = Contract & Document;

@Schema()
export class Contract {
  @Prop()
  subject: string;

  @Prop()
  client: string;

  @Prop()
  projects: string;

  @Prop()
  type: string;

  @Prop() 
  startDate: string;

  @Prop() 
  endDate: string;

  @Prop()
  contractValue: string;

  @Prop()
  description: string;

  @Prop()
  visibleToClient: string;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);
