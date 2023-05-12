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
import { AssignStockDto } from './assignStock.dto';
import { AssignStockService } from './assignStock.service';

@ApiTags('stock-assign')
@Controller('api/officeassets/stock/assign')
export class AssignStockController {
  constructor(private readonly assignStockService: AssignStockService) {}

  @Post()
  async create(@Body() assignStockDto: AssignStockDto) {
    return this.assignStockService.create(assignStockDto);
  }

  @Get('/all')
  findAll() {
    return this.assignStockService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.assignStockService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() stockDto: AssignStockDto) {
    return this.assignStockService.update(id, stockDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.assignStockService.remove(id)){
      return "assigned stock deleted successfully!"
    }
  }
}
