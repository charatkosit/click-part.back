import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categories')
export class CategoriesEntity {
    @PrimaryGeneratedColumn() 
    Id:         number;

    @Column()
    titel:      string;
}
