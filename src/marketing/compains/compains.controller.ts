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
import { CompainsDto } from './compains.dto';
import { CompainsService } from './compains.service';

@ApiTags('Compains')
@Controller('api/compains')
export class CompainsController {
  constructor(private readonly compainsService: CompainsService) {}

  @Post()
  async create(@Body() compainsDto: CompainsDto) {
    return this.compainsService.create(compainsDto);
  }

  @Get()
  async findAll() {
    return this.compainsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const compains = this.compainsService.findOne(id);

    return compains;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() compainsDto: CompainsDto) {
    return this.compainsService.update(id, compainsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.compainsService.remove(id);
  }
}
