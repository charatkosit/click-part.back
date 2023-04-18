/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, MinLength } from 'class-validator';
import { CreateOrdersDto } from './create-orders.dto';

export class UpdateOrdersDto extends PartialType(CreateOrdersDto) {
   
    id      :       string;
    User_Id :       number;
}