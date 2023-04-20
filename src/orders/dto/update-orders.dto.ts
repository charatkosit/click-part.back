import { CreateOrdersDto } from './create-orders.dto';
/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, MinLength } from 'class-validator';

export class UpdateOrdersDto extends PartialType(CreateOrdersDto) {
   

    User_Id :       number;
}