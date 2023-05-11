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
import { HourlyDto } from './hourly.template.dto';
import { HourlyService } from './hourly.template.service';

@ApiTags('Hourly-template')
@Controller('api/payroll/hourly')
export class HourlyController {
  constructor(private readonly hourlyService: HourlyService) {}

  @Post()
  async create(@Body() hourlyDto:HourlyDto) {
    return this.hourlyService.create(hourlyDto);
  }

  @Get()
  async findAll() {
    return this.hourlyService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.hourlyService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() hourlyDto: HourlyDto) {
    return this.hourlyService.update(id, hourlyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.hourlyService.remove(id)){
      return "Hourly-template deleted successfully!"
    }
  }
}
