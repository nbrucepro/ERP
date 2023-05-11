import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from './warehouse.model';
import { WarehouseDto } from './warehouse.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Warehouses')
@Controller('api/warehouses')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Post()
  async create(@Body() warehouse: WarehouseDto): Promise<Warehouse> {
    return this.warehouseService.create(warehouse);
  }

  @Get()
  async findAll(): Promise<Warehouse[]> {
    return this.warehouseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Warehouse> {
    return this.warehouseService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() warehouse: WarehouseDto): Promise<Warehouse> {
    return this.warehouseService.update(id, warehouse);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Warehouse> {
    return this.warehouseService.delete(id);
  }
}
