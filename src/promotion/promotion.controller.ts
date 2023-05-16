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
import { PromotionDto } from './promotion.dto';
import { PromotionService } from './promotion.service';

@ApiTags('Promotion')
@Controller('api/promotion')
export class PromotionController {
  constructor(private readonly promotionService: PromotionService) {}

  @Post()
  async create(@Body() promotionDto: PromotionDto) {
    return this.promotionService.create(promotionDto);
  }

  @Get()
  async findAll() {
    return this.promotionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const promotion = this.promotionService.findOne(id);

    return promotion;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() promotionDto: PromotionDto) {
    return this.promotionService.update(id, promotionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.promotionService.remove(id);
  }
}
