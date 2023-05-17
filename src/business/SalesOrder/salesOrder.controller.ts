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
import { SalesOrderDto } from './salesOrder.dto';
import { SalesOrderService } from './salesOrder.service';

@ApiTags('SalesOrder')
@Controller('api/salesorder')
export class SalesOrderController {
  constructor(private readonly salesOrderService: SalesOrderService) {}

  @Post()
  async create(@Body() salesOrderDto: SalesOrderDto) {
    return this.salesOrderService.create(salesOrderDto);
  }

  @Get()
  async findAll() {
    return this.salesOrderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const salesOrder = this.salesOrderService.findOne(id);

    return salesOrder;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() salesOrderDto: SalesOrderDto) {
    return this.salesOrderService.update(id, salesOrderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.salesOrderService.remove(id);
  }
}
