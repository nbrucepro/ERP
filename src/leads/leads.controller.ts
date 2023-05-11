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
import { LeadsDto } from './leads.dto';
import { LeadsService } from './leads.service';

@ApiTags('Leads')
@Controller('api/leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  async create(@Body() leadsDto: LeadsDto) {
    return this.leadsService.create(leadsDto);
  }

  @Get()
  async findAll() {
    return this.leadsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.leadsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() leadsDto: LeadsDto) {
    return this.leadsService.update(id, leadsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.leadsService.remove(id)){
      return "lead deleted successfully!"
    }
  }
}
