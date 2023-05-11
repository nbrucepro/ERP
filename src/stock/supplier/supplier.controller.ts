import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './supplier.dto';
import { Supplier } from './supplier.model';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Suppliers')
@Controller('api/stock/suppliers')
export class SupplierController {
  constructor(private readonly supplierService: SupplierService) {}

  @Post()
  async create(@Body() supplier: SupplierDto): Promise<Supplier> {
    return this.supplierService.create(supplier);
  }

  @Get()
  async findAll(): Promise<Supplier[]> {
    return this.supplierService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
      if (this.supplierService.findOne(id)){
        return this.supplierService.findOne(id);
        }
     return "User not found"
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() supplier: SupplierDto): Promise<Supplier> {
    return this.supplierService.update(id, supplier);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Supplier> {
    return this.supplierService.delete(id);
  }
}
