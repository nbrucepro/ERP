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
import { TimeChangeRequestDto } from './timeChangeRequest.dto';
import { TimeChangeRequestService } from './timeChangeRequest.service';

@ApiTags('TimeChangeRequest')
@Controller('api/time/change')
export class TimeChangeRequestController {
  constructor(private readonly timeChangeRequestService: TimeChangeRequestService) {}

  @Post()
  async create(@Body() timeChangeRequestDto: TimeChangeRequestDto) {
    return this.timeChangeRequestService.create(timeChangeRequestDto);
  }

  @Get()
  async findAll() {
    return this.timeChangeRequestService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const timeChangeRequest = this.timeChangeRequestService.findOne(id);

    return timeChangeRequest;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() timeChangeRequestDto: TimeChangeRequestDto) {
    return this.timeChangeRequestService.update(id, timeChangeRequestDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.timeChangeRequestService.remove(id);
  }
}
