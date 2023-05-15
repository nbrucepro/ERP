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
import { ComplaintsDto } from './complaints.dto';
import { ComplaintsService } from './complaints.service';

@ApiTags('Complaints')
@Controller('api/complaints')
export class ComplaintsController {
  constructor(private readonly complaintsService: ComplaintsService) {}

  @Post()
  async create(@Body() complaintsDto: ComplaintsDto) {
    return this.complaintsService.create(complaintsDto);
  }

  @Get()
  async findAll() {
    return this.complaintsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const complaint = this.complaintsService.findOne(id);
 
    return complaint;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() complaintsDto: ComplaintsDto) {
    return this.complaintsService.update(id, complaintsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.complaintsService.remove(id)){
      return "complaint deleted successfully!"
    }
    return "Complaint not found"
  }
}
