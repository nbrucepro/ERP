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
import { TasksDto } from './tasks.dto';
import { TasksService } from './tasks.service';

@ApiTags('Tasks')
@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() taskssDto: TasksDto) {
    return this.tasksService.create(taskssDto);
  }

  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const task = this.tasksService.findOne(id);

    return task;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() tasksDto: TasksDto) {
    return this.tasksService.update(id, tasksDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
