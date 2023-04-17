import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Addresses')
export class AddressesEntity {
    @PrimaryGeneratedColumn() id:string;
    
}
