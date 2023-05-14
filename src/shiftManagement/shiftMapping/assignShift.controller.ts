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
import { AssignShiftDto } from './assignShift.dto';
import { AssignShiftService } from './assignShift.service';

@ApiTags('Shift-mapping')
@Controller('api/shift/assign')
export class AssignShiftController {
  constructor(private readonly AssignShiftService: AssignShiftService) {}

  @Post()
  async create(@Body() AssignShiftDto: AssignShiftDto) {
    return this.AssignShiftService.create(AssignShiftDto);
  }

  @Get('/all')  
  async findAll() {
    return this.AssignShiftService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.AssignShiftService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() AssignShiftDto: AssignShiftDto) {
    return this.AssignShiftService.update(id, AssignShiftDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.AssignShiftService.remove(id)){
      return "assigned shift deleted successfully!"
    }
  }
}
