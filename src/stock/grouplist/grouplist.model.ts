import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GrouplistDocument = Grouplist & Document;

@Schema()
export class Grouplist {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const GrouplistSchema = SchemaFactory.createForClass(Grouplist);
