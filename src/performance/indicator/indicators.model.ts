import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type IndicatorsDocument = Indicators & Document;

@Schema()
export class Indicators {
  @Prop()
  designation: string;
  @Prop()
  customerExperienceManagement: string;
  @Prop()
  marketing: string;
  @Prop()
  management: string;
  @Prop()
  administration: string;
  @Prop()
  presentationSkill: string;
  @Prop()
  qualityOfWork: string;
  @Prop()
  efficiency: string;
  @Prop()
  integrity: string;
  @Prop()
  pofessionalism: string;
  @Prop()
  teamWork: string;
  @Prop()
  criticalThinking: string;
  @Prop()
  conflictManagement: string;
  @Prop()
  attendance: string;
  @Prop()
  abilityToMeetDeadline: string;
}

export const IndicatorsSchema = SchemaFactory.createForClass(Indicators);
