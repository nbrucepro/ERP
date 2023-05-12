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
import { AppraisalDto } from './appraisal.dto';
import { AppraisalService } from './appraisal.service';

@ApiTags('Perfomances')
@Controller('api/appraisal')
export class AppraisalController {
  constructor(private readonly appraisalService: AppraisalService) {}

  @Post()
  async create(@Body() appraisalDto: AppraisalDto) {
    return this.appraisalService.create(appraisalDto);
  }

  @Get()
  async findAll() {
    return this.appraisalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.appraisalService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() appraisalDto: AppraisalDto) {
    return this.appraisalService.update(id, appraisalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.appraisalService.remove(id)){
      return "appraisal deleted successfully!"
    }
  }
}
