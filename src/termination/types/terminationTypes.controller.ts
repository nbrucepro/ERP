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
import { TerminationTypesDto } from './terminationTypes.dto';
import { TerminationTypesService } from './terminationTypes.service';

@ApiTags('Termination')
@Controller('api/terminationtypes')
export class TerminationTypesController {
  constructor(
    private readonly terminationTypesService: TerminationTypesService,
  ) {}

  @Post()
  async create(@Body() terminationTypesDto: TerminationTypesDto) {
    return this.terminationTypesService.create(terminationTypesDto);
  }

  @Get()
  async findAll() {
    return this.terminationTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.terminationTypesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() terminationTypesDto: TerminationTypesDto,
  ) {
    return this.terminationTypesService.update(id, terminationTypesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.terminationTypesService.remove(id);
  }
}
