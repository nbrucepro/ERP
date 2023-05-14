import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TransferItemService } from './transferItem.service';
import { TransferItem } from './transferItem.model';
import { TransferItemDto } from './transferItem.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Transfer-Items')
@Controller('api/stock/item/transfer')
export class TransferItemController {
  constructor(private readonly transferItemService: TransferItemService) {}

  @Post()
  async create(@Body() transferItem: TransferItemDto): Promise<TransferItem> {
    return this.transferItemService.create(transferItem);
  }

  @Get()
  async findAll(): Promise<TransferItem[]> {
    return this.transferItemService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TransferItem> {
    return this.transferItemService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() transferItem: TransferItemDto): Promise<TransferItem> {
    return this.transferItemService.update(id, transferItem);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TransferItem> {
    return this.transferItemService.delete(id);
  }
}
