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
import { HolidayDto } from './holiday.dto';
import { HolidayService } from './holiday.service';

@ApiTags('Holiday')
@Controller('api/holiday')
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @Post()
  async create(@Body() holidayDto: HolidayDto) {
    return this.holidayService.create(holidayDto);
  }

  @Get()
  async findAll() {
    return this.holidayService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const holiday = this.holidayService.findOne(id);

    return holiday;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() holidayDto: HolidayDto) {
    return this.holidayService.update(id, holidayDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.holidayService.remove(id);
  }
}
