import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticlesDocument = Articles & Document;

@Schema()
export class Articles {
  @Prop()
  title: string;
  @Prop()
  slug: string;
  @Prop()
  category: string;
  @Prop()
  onlyforinternal: boolean;
  @Prop()
  status: string;  
  @Prop()
  description: string;  
  @Prop()
  attachment: string; 
}

export const ArticlesSchema = SchemaFactory.createForClass(Articles);
