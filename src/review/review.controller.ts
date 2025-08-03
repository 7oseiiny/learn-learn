import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dtos/review.dto';

@Controller('review')
export class ReviewController {
    constructor(
        private readonly reviewService: ReviewService
    ) {}
    @Get()
    getReviews() {
        return this.reviewService.getReviews();
    }
    @Post(':productId/:userId')
    createReview(
        @Param('productId') productId:string,
        @Param('userId') userId:string,
        @Body() createReviewDto: CreateReviewDto
    ) {
        return this.reviewService.createReview(productId,userId,createReviewDto);
    }

    @Get(':productId')
    getReviewByProdcutId(@Param('productId') productId: string) {
        return this.reviewService.getReviewByProdcutId(productId);
    }

    
}
