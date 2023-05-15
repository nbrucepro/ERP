import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OpportunitiesDocument = Opportunities & Document;

@Schema()
export class Opportunities {
  @Prop()
  opportunityName: string;

  @Prop()
  probabilityOfWinning: number;

  @Prop()
  currentState: string;

  @Prop()
  expectedRevenue: number;

  @Prop()
  nextAction: string;

  @Prop()
  responsible: string;

  @Prop()
  stages: string;

  @Prop()
  forecastCloseDate: string;

  @Prop()
  addNewLink: string;

  @Prop()
  nexActionDate: string;

  @Prop()
  shortNote: string;

}

export const OpportunitiesSchema = SchemaFactory.createForClass(Opportunities);
