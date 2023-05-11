import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
  } from '@nestjs/common';
  import { InvoiceService } from './invoice.service';
import { InvoiceDto } from './invoice.dto';
import { ApiTags } from '@nestjs/swagger';
  
@ApiTags("Invoice")
  @Controller('api/sales/invoice')
  export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService) {}
  
    @Post()
    async create(@Body() createInvoiceDto: InvoiceDto) {
      return this.invoiceService.create(createInvoiceDto);
    }
  
    @Get()
    async findAll() {
      return this.invoiceService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      return this.invoiceService.findOne(id);
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() updateInvoiceDto: InvoiceDto,
    ) {
      return this.invoiceService.update(id, updateInvoiceDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string) {
      return this.invoiceService.remove(id);
    }
  }
  