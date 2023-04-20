import { OrdersDeteilsController } from './orders-deteils.controller';
import { OrdersDeteils} from './entities/orders-deteils.entity';
import { OrdersDeteilsService } from './orders-deteils.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([OrdersDeteils])],
  controllers: [OrdersDeteilsController],
  providers: [OrdersDeteilsService],
})
export class OrdersDeteilsModule {}
