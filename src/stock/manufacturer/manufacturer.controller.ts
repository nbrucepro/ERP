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
import { ManufacturerDto } from './manufacturer.dto';
import { ManufacturerService } from './Manufacturer.service';

@ApiTags('Manufacturer-list')
@Controller('api/manufacturer')
export class ManufacturerController {
  constructor(private readonly manufacturerService: ManufacturerService) {}

  @Post()
  async create(@Body() manufacturerDto: ManufacturerDto) {
    return this.manufacturerService.create(manufacturerDto);
  }

  @Get()
  async findAll() {
    return this.manufacturerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.manufacturerService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() manufacturerDto: ManufacturerDto) {
    return this.manufacturerService.update(id, manufacturerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.manufacturerService.remove(id)){
      return "user deleted successfully!"
    }
  }
}
