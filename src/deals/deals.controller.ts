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
import { DealsDto } from './deals.dto';
import { DealsService } from './deals.service';

@ApiTags('Deals')
@Controller('api/deals')
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post()
  async create(@Body() dealsDto: DealsDto) {
    return this.dealsService.create(dealsDto);
  }

  @Get()
  async findAll() {
    return this.dealsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const deal = this.dealsService.findOne(id);

    return deal;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dealsDto: DealsDto) {
    return this.dealsService.update(id, dealsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.dealsService.remove(id);
  }
}
