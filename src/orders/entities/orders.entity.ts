import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Orders')
export class OrdersEntity {
    @PrimaryGeneratedColumn()
    Id:             number;

    @Column()
    User_Id :       number;

}
