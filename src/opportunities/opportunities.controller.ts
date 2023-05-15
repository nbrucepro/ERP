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
import { OpportunitiesDto } from './opportunities.dto';
import { OpportunitiesService } from './opportunities.service';

@ApiTags('Opportunities')
@Controller('api/opportunities')
export class OpportunitiesController {
  constructor(private readonly opportunitiesService: OpportunitiesService) {}

  @Post()
  async create(@Body() opportunitiessDto: OpportunitiesDto) {
    return this.opportunitiesService.create(opportunitiessDto);
  }

  @Get()
  async findAll() {
    return this.opportunitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const opportunity = this.opportunitiesService.findOne(id);

    return opportunity;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() opportunitiesDto: OpportunitiesDto) {
    return this.opportunitiesService.update(id, opportunitiesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.opportunitiesService.remove(id);
  }
}
