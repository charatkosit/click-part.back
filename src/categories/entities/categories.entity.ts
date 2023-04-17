import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categories')
export class CategoriesEntity {
    @PrimaryGeneratedColumn() id:string;
}
