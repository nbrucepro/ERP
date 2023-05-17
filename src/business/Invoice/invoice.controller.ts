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
import { BusinessInvoiceDto } from './invoice.dto';
import { BusinessInvoiceService } from './invoice.service';

@ApiTags('Business-Invoice')
@Controller('api/invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: BusinessInvoiceService) {}

  @Post()
  async create(@Body() invoiceDto: BusinessInvoiceDto) {
    return this.invoiceService.create(invoiceDto);
  }

  @Get()
  async findAll() {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const invoice = this.invoiceService.findOne(id);

    return invoice;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() invoiceDto: BusinessInvoiceDto) {
    return this.invoiceService.update(id, invoiceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.invoiceService.remove(id);
  }
}
