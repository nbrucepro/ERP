import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StockDto } from './stock.dto';
import { StockService } from './stock.service';

@ApiTags('Office-assets')
@Controller('api/officeassets/stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Post()
  async create(@Body() stockDto: StockDto) {
    return this.stockService.create(stockDto);
  }

  @Get()
  async findAll() {
    return this.stockService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.stockService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() stockDto: StockDto) {
    return this.stockService.update(id, stockDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.stockService.remove(id)){
      return "office asset deleted successfully!"
    }
  }
}
