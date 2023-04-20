import { MinLength } from 'class-validator';
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards,UploadedFile, UseInterceptors, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { OrdersDeteilsService } from './orders-deteils.service';
import { CreateOrdersDeteilsDto } from './dto/create-orders-deteils.dto';
import { UpdateOrdersDeteilsDto } from './dto/update-orders-deteils.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import * as csvParser from 'csv-parser';
import * as mysql from 'mysql2/promise';

@Controller( 
  {  
    version: '1',
    path: 'orders/deteil'
  }
)
export class OrdersDeteilsController {
  constructor(private readonly ordersDeteilsService: OrdersDeteilsService) { }
//localhost:3000/api/v1/orders/deteil
  @Post()
  create(@Body() createOrdersDeteilsDto : CreateOrdersDeteilsDto) {
    return this.ordersDeteilsService.create(createOrdersDeteilsDto);
  }

// localhost:3000/api/v1/orders/deteil
@Get()
  findAll() {
    return this.ordersDeteilsService.findAll();
  }

 
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordersDeteilsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdersDeteilsDto: UpdateOrdersDeteilsDto) {
    return this.ordersDeteilsService.update(+id, updateOrdersDeteilsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersDeteilsService.remove(+id);
  }

 

}
