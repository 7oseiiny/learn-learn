import { Injectable } from '@nestjs/common';
import { Review } from './review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
    constructor(
        @InjectRepository(Review) 
        private readonly reviewRepository: Repository<Review>
    ) {}
    getReviews() {
        return this.reviewRepository.find();
    }
}
