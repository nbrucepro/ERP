import { Module } from '@nestjs/common';
import {ItemsController } from './items.controller';
import { ItemService } from './items.service';

@Module({
 imports:[],
 providers: [ItemService],
 controllers: [ItemsController]
})
export class ItemsModule {}
