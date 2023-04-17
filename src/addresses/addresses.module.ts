import { AddressesService } from './addresses.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [AddressesService],
})
export class AddressesModule {}
