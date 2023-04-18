/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export class CreateOrdersDto {
  id :            string;
  User_Id :       number;

  constructor(partial: Partial<CreateOrdersDto>) {
    // Use correct argument name
    Object.assign(this, partial); // Assign object properties from partial to this
  }
}
