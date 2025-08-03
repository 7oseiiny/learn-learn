import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './review.schema';
import { CreateReviewDto } from './dtos/review.dto';

@Injectable()
export class ReviewService {
    constructor(
        @InjectModel(Review.name)
        private readonly ReviewModule: Model<Review>
    ) {}
    async getReviews() {
        const reviews = await this.ReviewModule.find();
        return reviews;
    }
    async createReview(productId:string , userId:string , createReviewDto: CreateReviewDto) {
        const review = {...createReviewDto, productId, userId}
        
        return await this.ReviewModule.create(review);;
    }
    async getReviewByProdcutId(productId: string) {
        const review = await this.ReviewModule.find({ productId });
        return review;
    }
   
}
