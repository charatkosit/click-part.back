import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Orders')
export class OrdersEntity {
    @PrimaryGeneratedColumn() id:string;
}
