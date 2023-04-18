/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, MinLength } from 'class-validator';
import { CreateOrdersDeteilsDto } from './create-orders-deteils.dto';

export class UpdateOrdersDeteilsDto extends PartialType(CreateOrdersDeteilsDto) {
   
    id :            string;
    Order_Id:       number;
    Products_Id:    number;
    Quantity:       number;
    Status:         string;
}