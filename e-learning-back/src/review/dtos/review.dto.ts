import { IsString } from "class-validator";

export class ReviewDto {
    @IsString()
    id: number;
    
    @IsString()
    comment: string;
    
}

export class CreateReviewDto {
    @IsString()
    comment: string;
    
    
}
