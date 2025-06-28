import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, UserDto } from './dtos/user.dto';
import { ProductService } from './../product/product.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from 'src/review/dtos/review.dto';

@Injectable()
export class UserService {
    constructor(
        @Inject(forwardRef(() => ProductService))
        private readonly productService: ProductService,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }
    findAll() {
        return this.userRepository.find();
    }
    create(body: CreateUserDto) {
        const user = this.userRepository.create(body);
        return this.userRepository.save(user);
    }
    async findById(id: number) {
        let user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
       
    }
    async update(id: number, body: UpdateUserDto) {
        let user = await this.findById(id);
        user = { ...user, ...body };
        return this.userRepository.save(user);
    }

    addReviewToProduct(userId: number, productId: number ,review: CreateReviewDto) {
        return this.productService.addReviewToProduct(userId, productId , review);
    }
}
