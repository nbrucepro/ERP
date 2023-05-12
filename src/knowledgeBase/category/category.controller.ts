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
import { CategoryDto } from './category.dto';
import { CategoryService } from './category.service';

@ApiTags('knowledge-base')
@Controller('api/articles/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() categoryDto: CategoryDto) {
    return this.categoryService.create(categoryDto);
  }

  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() categoryDto: CategoryDto) {
    return this.categoryService.update(id, categoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.categoryService.remove(id)){
      return "category deleted successfully!"
    }
  }
}
