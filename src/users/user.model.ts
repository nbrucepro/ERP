import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
 export type UserDocument = User & Document;
@Schema()
export class User {
  @Prop()
  id: string;
  @Prop({ required: true })
  fullName: string;
  @Prop({ required: true })
  username: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true })
  confirmPassword: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  companyName: string;
  @Prop({ required: true })
  companyEmail: string;
}
export const userSchema = SchemaFactory.createForClass(User);
