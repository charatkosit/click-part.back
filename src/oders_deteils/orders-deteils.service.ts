
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { CreateOrdersDeteilsDto } from './dto/create-orders-deteils.dto';
import { UpdateOrdersDeteilsDto } from './dto/update-orders-deteils.dto';
import { OrdersDeteils} from './entities/orders-deteils.entity';
import * as argon2 from 'argon2'
import { NotFoundException } from '@nestjs/common/exceptions';
import { DeleteResult, UpdateResult } from 'typeorm';

@Injectable()
export class OrdersDeteilsService {
  constructor(@InjectRepository(OrdersDeteils)
  private ordersDeteilsRepository: Repository<OrdersDeteils>) {
 
  }
  async create(createOrdersDeteilsDto: CreateOrdersDeteilsDto): Promise<OrdersDeteils> {
    const orderDeteils = new OrdersDeteils();
    
    orderDeteils.Order_Id = createOrdersDeteilsDto.Order_Id;
    orderDeteils.Products_Id = createOrdersDeteilsDto.Products_Id;
    orderDeteils.Quantity = createOrdersDeteilsDto.Quantity;
    orderDeteils.Status = createOrdersDeteilsDto.Status;
    
    return await this.ordersDeteilsRepository.save(orderDeteils);
  }

  async findAll() {
    return await this.ordersDeteilsRepository.find()
  } 
  
  async findOne(id: number) {
      return await this.ordersDeteilsRepository.findOne({where: { Id: id} })
      // ถ้าไม่มีรายชื่อ ควรแสดง error ออกไป
  }



  async update(id: number, updateUserDto: UpdateOrdersDeteilsDto):Promise<UpdateResult> {
    return await this.ordersDeteilsRepository.update(id,updateUserDto)
  }

  async remove(id: number) :  Promise<DeleteResult> {
    return await this.ordersDeteilsRepository.delete({Id:id})
}
}