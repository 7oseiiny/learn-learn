import { Review } from "src/review/review.entity";
import { CURRENT_TIMESTAMP } from "src/utils/reusable";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({type: 'timestamp',default: () => CURRENT_TIMESTAMP})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP})
    updatedAt: Date;
    ////////////////////////////////////////////////////////////////////////////////////////////
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @OneToMany(() => Review, (review) => review.product)
    reviews: Product[];

    
}