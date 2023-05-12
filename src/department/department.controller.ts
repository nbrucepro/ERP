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
import { DepartmentDto } from './department.dto';
import { DepartmentService } from './department.service';

@ApiTags('Departments')
@Controller('api/department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(@Body() departmentDto: DepartmentDto) {
    return this.departmentService.create(departmentDto);
  }

  @Get()
  async findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.departmentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() departmentDto: DepartmentDto) {
    return this.departmentService.update(id, departmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.departmentService.remove(id)){
      return "department deleted successfully!"
    }
  }
}
