import { IsNumber, IsString } from "class-validator";

export class ReviewDto {
    @IsString()
    id: string;
    
    @IsString()
    comment: string;
    
    @IsNumber()
    rating: number;
}

export class CreateReviewDto {
    @IsString()
    comment: string;
    
    @IsNumber()
    rating: number;
}
