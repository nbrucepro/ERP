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
import { ResignationDto } from './resignation.dto';
import { ResignationService } from './resignation.service';

@ApiTags('Resignation')
@Controller('api/resignation')
export class ResignationController {
  constructor(private readonly resignationService: ResignationService) {}

  @Post()
  async create(@Body() resignationDto: ResignationDto) {
    return this.resignationService.create(resignationDto);
  }

  @Get()
  async findAll() {
    return this.resignationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const resignation = this.resignationService.findOne(id);

    return resignation;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() resignationDto: ResignationDto) {
    return this.resignationService.update(id, resignationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.resignationService.remove(id);
  }
}
