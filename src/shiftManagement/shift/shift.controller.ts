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
import { ShiftDto } from './shift.dto';
import { ShiftService } from './shift.service';

@ApiTags('Shift')
@Controller('api/shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Post()
  async create(@Body() shiftDto: ShiftDto) {
    return this.shiftService.create(shiftDto);
  }

  @Get()
  async findAll() {
    return this.shiftService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.shiftService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() shiftDto: ShiftDto) {
    return this.shiftService.update(id, shiftDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.shiftService.remove(id)){
      return "shift deleted successfully!"
    }
  }
}
