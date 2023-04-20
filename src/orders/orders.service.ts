/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateOrdersDto } from './dto/create-Orders.dto';
import { UpdateOrdersDto } from './dto/update-Orders.dto';
import { Orders } from './entities/orders.entity';
import * as argon2 from 'argon2'
import { NotFoundException } from '@nestjs/common/exceptions';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Orders)
  private ordersRepository: Repository<Orders>) {
 
  }
  async create(createOrdersDto: CreateOrdersDto): Promise<Orders> {
    const order = new Orders();

    order.User_Id = createOrdersDto.User_Id;
    
    return await this.ordersRepository.save(order);
  }

  async findAll() {
    return await this.ordersRepository.find()
  } 
  
  async findOne(id: number) {
      return await this.ordersRepository.findOne({where: { Id: id} })
      // ถ้าไม่มีรายชื่อ ควรแสดง error ออกไป
  }



  async update(id: number, updateOrdersDto: UpdateOrdersDto):Promise<UpdateResult> {
    return await this.ordersRepository.update(id,updateOrdersDto)
  }

  async remove(id: number) :  Promise<DeleteResult> {
    return await this.ordersRepository.delete({Id:id})
}
}