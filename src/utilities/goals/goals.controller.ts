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
import { GoalsDto } from './goals.dto';
import { GoalsService } from './goals.service';

@ApiTags('Goals')
@Controller('api/goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  async create(@Body() goalsDto: GoalsDto) {
    return this.goalsService.create(goalsDto);
  }

  @Get()
  async findAll() {
    return this.goalsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const goals = this.goalsService.findOne(id);

    return goals;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() goalsDto: GoalsDto) {
    return this.goalsService.update(id, goalsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.goalsService.remove(id);
  }
}
