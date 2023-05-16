import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnnouncementsDocument = Announcements & Document;

@Schema()
export class Announcements {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop()
  attachment: string;

  @Prop()
  shareWith: string;

  @Prop()
  status: string;
}

export const AnnouncementsSchema = SchemaFactory.createForClass(Announcements);
