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
import { IndicatorsDto } from './indicators.dto';
import { IndicatorsService } from './indicators.service';

@ApiTags('Perfomances')
@Controller('api/indicators')
export class IndicatorsController {
  constructor(private readonly indicatorsService: IndicatorsService) {}

  @Post()
  async create(@Body() indicatorsDto: IndicatorsDto) {
    return this.indicatorsService.create(indicatorsDto);
  }

  @Get()
  async findAll() {
    return this.indicatorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.indicatorsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() indicatorsDto: IndicatorsDto) {
    return this.indicatorsService.update(id, indicatorsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.indicatorsService.remove(id)){
      return "indicator deleted successfully!"
    }
  }
}
