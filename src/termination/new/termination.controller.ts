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
import { TerminationDto } from './termination.dto';
import { TerminationService } from './termination.service';

@ApiTags('Termination')
@Controller('api/termination')
export class TerminationController {
  constructor(private readonly terminationService: TerminationService) {}

  @Post()
  async create(@Body() terminationDto: TerminationDto) {
    return this.terminationService.create(terminationDto);
  }

  @Get()
  async findAll() {
    return this.terminationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const complaint = this.terminationService.findOne(id);

    return complaint;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() terminationDto: TerminationDto) {
    return this.terminationService.update(id, terminationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.terminationService.remove(id);
  }
}
