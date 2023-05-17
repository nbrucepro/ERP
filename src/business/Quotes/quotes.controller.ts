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
import { QuotesDto } from './quotes.dto';
import { QuotesService } from './quotes.service';

@ApiTags('Quotes')
@Controller('api/quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Post()
  async create(@Body() quotesDto: QuotesDto) {
    return this.quotesService.create(quotesDto);
  }

  @Get()
  async findAll() {
    return this.quotesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const quotes = this.quotesService.findOne(id);

    return quotes;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() quotesDto: QuotesDto) {
    return this.quotesService.update(id, quotesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.quotesService.remove(id);
  }
}
