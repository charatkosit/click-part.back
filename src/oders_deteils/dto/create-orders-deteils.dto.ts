/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export class CreateOrdersDeteilsDto {

  Order_Id:       number;
  Products_Id:    number;
  Quantity:       number;
  Status:         string;

  constructor(partial: Partial<CreateOrdersDeteilsDto>) {
    // Use correct argument name
    Object.assign(this, partial); // Assign object properties from partial to this
  }
}
