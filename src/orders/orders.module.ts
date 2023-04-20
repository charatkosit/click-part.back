import { OrdersController } from './orders.controller';
import { Orders} from './entities/orders.entity';
import { OrdersService } from './orders.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
