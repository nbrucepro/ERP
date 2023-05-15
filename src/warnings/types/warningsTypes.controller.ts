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
import { WarningsTypesDto } from './warningsTypes.dto';
import { WarningsTypesService } from './warningsTypes.service';

@ApiTags('Warnings')
@Controller('api/warningstypes')
export class WarningsTypesController {
  constructor(
    private readonly warningsTypesService: WarningsTypesService,
  ) {}

  @Post()
  async create(@Body() warningsTypesDto: WarningsTypesDto) {
    return this.warningsTypesService.create(warningsTypesDto);
  }

  @Get()
  async findAll() {
    return this.warningsTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.warningsTypesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() warningsTypesDto: WarningsTypesDto,
  ) {
    return this.warningsTypesService.update(id, warningsTypesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.warningsTypesService.remove(id);
  }
}
