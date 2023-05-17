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
import { TaxDto } from './tax.dto';
import { TaxService } from './tax.service';

@ApiTags('Tax')
@Controller('api/tax')
export class TaxController {
  constructor(private readonly taxService: TaxService) {}

  @Post()
  async create(@Body() taxDto: TaxDto) {
    return this.taxService.create(taxDto);
  }

  @Get()
  async findAll() {
    return this.taxService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const tax = this.taxService.findOne(id);

    return tax;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() taxDto: TaxDto) {
    return this.taxService.update(id, taxDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.taxService.remove(id);
  }
}
