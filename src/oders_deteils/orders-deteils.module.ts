import { OrdersDeteilsService } from './orders-deteils.service';
import { OrdersDeteilsController } from './orders-deteils.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [OrdersDeteilsController],
  providers: [OrdersDeteilsService],
})
export class OrdersDeteilsModule {}
