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
import { LeaveDto } from './leave.dto';
import { LeaveService } from './leave.service';

@ApiTags('Leave-management')
@Controller('api/apply-leave')
export class LeaveController {
  constructor(private readonly leaveService: LeaveService) {}

  @Post()
  async create(@Body() leaveDto: LeaveDto) {
    return this.leaveService.create(leaveDto);
  }

  @Get()
  async findAll() {
    return this.leaveService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.leaveService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() leaveDto: LeaveDto) {
    return this.leaveService.update(id, leaveDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.leaveService.remove(id)){
      return "leave-application deleted successfully!"
    }
  }
}
