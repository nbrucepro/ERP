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
import { WarningsDto } from './warnings.dto';
import { WarningsService } from './warnings.service';

@ApiTags('Warnings')
@Controller('api/warnings')
export class WarningsController {
  constructor(private readonly warningsService: WarningsService) {}

  @Post()
  async create(@Body() warningsDto: WarningsDto) {
    return this.warningsService.create(warningsDto);
  }

  @Get()
  async findAll() {
    return this.warningsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const warning = this.warningsService.findOne(id);

    return warning;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() warningsDto: WarningsDto) {
    return this.warningsService.update(id, warningsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.warningsService.remove(id);
  }
}
