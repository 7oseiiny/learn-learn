
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  user: string;

  @Prop()
  email: string;

  @Prop()
  pass: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
