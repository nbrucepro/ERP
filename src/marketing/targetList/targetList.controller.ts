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
import { TargetListDto } from './targetList.dto';
import { TargetListService } from './targetList.service';

@ApiTags('Target-List')
@Controller('api/target/list')
export class TargetListController {
  constructor(private readonly targetListService: TargetListService) {}

  @Post()
  async create(@Body() targetListDto: TargetListDto) {
    return this.targetListService.create(targetListDto);
  }

  @Get()
  async findAll() {
    return this.targetListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const targetList = this.targetListService.findOne(id);

    return targetList;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() targetListDto: TargetListDto) {
    return this.targetListService.update(id, targetListDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.targetListService.remove(id);
  }
}
