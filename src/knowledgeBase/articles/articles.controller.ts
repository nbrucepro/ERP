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
import { ArticlesDto } from './articles.dto';
import { ArticlesService } from './articles.service';

@ApiTags('knowledge-base')
@Controller('api/articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() articlesDto: ArticlesDto) {
    return this.articlesService.create(articlesDto);
  }

  @Get()
  async findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.articlesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() articlesDto: ArticlesDto) {
    return this.articlesService.update(id, articlesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.articlesService.remove(id)){
      return "article deleted successfully!"
    }
  }
}
