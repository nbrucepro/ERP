import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { Purchase } from './purchase.model';
import { PurchaseDto } from './purchase.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Purchase-Items')
@Controller('api/stock/item/purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async create(@Body() purchase: PurchaseDto): Promise<Purchase> {
    return this.purchaseService.create(purchase);
  }

  @Get()
  async findAll(): Promise<Purchase[]> {
    return this.purchaseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Purchase> {
    return this.purchaseService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() purchase: PurchaseDto): Promise<Purchase> {
    return this.purchaseService.update(id, purchase);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Purchase> {
    return this.purchaseService.delete(id);
  }
}
