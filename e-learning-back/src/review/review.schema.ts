
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop()
  comment: string;

  @Prop()
  rating: number;

  @Prop({ type: String, ref: 'Product' })
  productId: string;

  @Prop({ type: String, ref: 'User' })
  userId: string;

  
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
