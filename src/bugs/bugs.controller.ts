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
import { BugsDto } from './bugs.dto';
import { BugsService } from './bugs.service';

@ApiTags('Bugs')
@Controller('api/bugs')
export class BugsController {
  constructor(private readonly bugsService: BugsService) {}

  @Post()
  async create(@Body() bugsDto: BugsDto) {
    return this.bugsService.create(bugsDto);
  }

  @Get()
  async findAll() {
    return this.bugsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const bugs = this.bugsService.findOne(id);

    return bugs;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() bugsDto: BugsDto) {
    return this.bugsService.update(id, bugsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.bugsService.remove(id);
  }
}
