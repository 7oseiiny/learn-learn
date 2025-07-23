
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  @Exclude()
  pass: string;

  @Prop({ type: String, ref: 'Role' })
  role: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
