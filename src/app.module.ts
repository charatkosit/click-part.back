import { Users } from 'src/users/entities/users.entity';
import { Products } from './products/entities/products.entity';
import { AddressesModule } from './addresses/addresses.module';
import { AddressesController } from './addresses/addresses.controller';
import { CategoriesModule } from './categories/categories.module';
import { OrdersDeteilsModule } from './oders_deteils/orders-deteils.module';
import { OrdersModule } from './orders/orders.module';
import { OrdersController } from './orders/orders.controller';

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { HttpModule } from '@nestjs/axios';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    AddressesModule,
    CategoriesModule,
    OrdersDeteilsModule,
    OrdersModule,
    ProductsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    HttpModule,
    AuthModule,
    UsersModule,
    ProductsModule
  ],
  controllers: [AddressesController, OrdersController, AppController,ProductsController,UsersController],
  providers: [AppService],
})
export class AppModule {}
