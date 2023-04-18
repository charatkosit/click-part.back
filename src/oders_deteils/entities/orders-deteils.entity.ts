import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('OrdersDeteils')
export class OrdersDeteilsEntity {
    @PrimaryGeneratedColumn() 
    Id:             number;

    @Column()
    Order_Id:       number;

    @Column()
    Products_Id:    number;

    @Column()
    Quantity:       number;

    @Column({default: 'Pending'})
    Status: string;
}
