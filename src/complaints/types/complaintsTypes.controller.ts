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
import { ComplaintsTypesDto } from './complaintsTypes.dto';
import { ComplaintsTypesService } from './complaintsTypes.service';

@ApiTags('Complaints')
@Controller('api/complaintstypes')
export class ComplaintsTypesController {
  constructor(private readonly complaintsTypesService: ComplaintsTypesService) {}

  @Post()
  async create(@Body() complaintsTypesDto: ComplaintsTypesDto) {
    return this.complaintsTypesService.create(complaintsTypesDto);
  }

  @Get()
  async findAll() {
    return this.complaintsTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.complaintsTypesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() complaintsTypesDto: ComplaintsTypesDto) {
    return this.complaintsTypesService.update(id, complaintsTypesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.complaintsTypesService.remove(id)){
      return "complaintsType deleted successfully!"
    }
  }
}
