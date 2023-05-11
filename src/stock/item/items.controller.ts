import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
  } from '@nestjs/common';
  import { StockItemService } from './items.service';
import { StockItemDto } from './items.dto';
import { ApiTags } from '@nestjs/swagger';
  
@ApiTags("Stock-items")
  @Controller('api/items')
  export class StockItemController {
    constructor(private readonly stockItemService: StockItemService) {}
  
    @Post()
    async create(@Body() createStockItemDto: StockItemDto) {
      return this.stockItemService.create(createStockItemDto);
    }
  
    @Get()
    async findAll() {
      return this.stockItemService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.stockItemService.findOne(id);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() updateStockItemDto: StockItemDto,
    ) {
      return this.stockItemService.update(id, updateStockItemDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.stockItemService.remove(id);
    }
  }
  