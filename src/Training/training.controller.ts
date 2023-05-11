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
import { TrainingDto } from './training.dto';
import { TrainingService } from './Training.service';

@ApiTags('Training-courses')
@Controller('api/training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Post()
  async create(@Body() trainingDto: TrainingDto) {
    return this.trainingService.create(trainingDto);
  }

  @Get()
  async findAll() {
    return this.trainingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.trainingService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() trainingDto: TrainingDto) {
    return this.trainingService.update(id, trainingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.trainingService.remove(id)){
      return "Training deleted successfully!"
    }
  }
}
