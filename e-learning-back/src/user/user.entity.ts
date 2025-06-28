import { Review } from "src/review/review.entity";
import { CURRENT_TIMESTAMP } from "src/utils/reusable";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({type: 'timestamp',default: () => CURRENT_TIMESTAMP})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP})
    updatedAt: Date;

    ////////////////////////////////////////////////////////////////////////////////////////////

    @Column()
    user: string;

    @Column()
    email: string;

    @Column()
    pass: string;

    @OneToMany(() => Review, (review) => review.user)
    reviews: Review[];


}