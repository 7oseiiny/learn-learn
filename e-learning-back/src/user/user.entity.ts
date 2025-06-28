import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

const CURRENT_TIMESTAMP =  'CURRENT_TIMESTAMP(6)';

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user: string;

    @Column()
    email: string;

    @Column()
    pass: string;

    @CreateDateColumn({type: 'timestamp',default: () => CURRENT_TIMESTAMP})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp',default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP})
    updatedAt: Date;
}