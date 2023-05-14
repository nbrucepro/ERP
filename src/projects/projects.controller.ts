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
import { ProjectsDto } from './projects.dto';
import { ProjectsService } from './projects.service';

@ApiTags('Projects')
@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  async create(@Body() projectsDto: ProjectsDto) {
    return this.projectsService.create(projectsDto);
  }

  @Get()
  async findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() projectsDto: ProjectsDto) {
    return this.projectsService.update(id, projectsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.projectsService.remove(id)){
      return "Project deleted successfully!"
    }
  }
}
