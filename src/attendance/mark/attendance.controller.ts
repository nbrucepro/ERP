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
import { AttendanceDto } from './attendance.dto';
import { AttendanceService } from './attendance.service';

@ApiTags('Attendance')
@Controller('api/attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  async create(@Body() attendanceDto: AttendanceDto) {
    return this.attendanceService.create(attendanceDto);
  }

  @Get()
  async findAll() {
    return this.attendanceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const attendance = this.attendanceService.findOne(id);

    return attendance;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() attendanceDto: AttendanceDto) {
    return this.attendanceService.update(id, attendanceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.attendanceService.remove(id);
  }
}
