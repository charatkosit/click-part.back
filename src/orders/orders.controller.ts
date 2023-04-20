import { MinLength } from 'class-validator';
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,UploadedFile, UseInterceptors, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { UpdateOrdersDto } from './dto/update-orders.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as csvParser from 'csv-parser';
import * as mysql from 'mysql2/promise';

@Controller( 
  {  
    version: '1',
    path: 'orders'
  }
)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }
//localhost:3000/api/v1/orders
  @Post()
  create(@Body() createOrdersDto : CreateOrdersDto) {
    return this.ordersService.create(createOrdersDto);
  }

// localhost:3000/api/v1/orders
@Get()
  findAll() {
    return this.ordersService.findAll();
  }

 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersDto: UpdateOrdersDto) {
    return this.ordersService.update(+id, updateOrdersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }

 

}
