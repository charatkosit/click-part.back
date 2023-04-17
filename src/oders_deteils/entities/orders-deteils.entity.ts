import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('OrdersDeteils')
export class OrdersDeteilsEntity {
    @PrimaryGeneratedColumn() id:string;
}
