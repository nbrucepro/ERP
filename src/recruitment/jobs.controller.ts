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
import { JobsDto } from './jobs.dto';
import { JobsService } from './jobs.service';

@ApiTags('Recruitments')
@Controller('api/jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  async create(@Body() jobsDto: JobsDto) {
    return this.jobsService.create(jobsDto);
  }

  @Get()
  async findAll() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.jobsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() jobsDto: JobsDto) {
    return this.jobsService.update(id, jobsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.jobsService.remove(id)){
      return "job deleted successfully!"
    }
  }
}
