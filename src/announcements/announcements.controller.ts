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
import { AnnouncementsDto } from './announcements.dto';
import { AnnouncementsService } from './announcements.service';

@ApiTags('Announcements')
@Controller('api/announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  @Post()
  async create(@Body() announcementsDto: AnnouncementsDto) {
    return this.announcementsService.create(announcementsDto);
  }

  @Get()
  async findAll() {
    return this.announcementsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const announcements = this.announcementsService.findOne(id);

    return announcements;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() announcementsDto: AnnouncementsDto) {
    return this.announcementsService.update(id, announcementsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.announcementsService.remove(id);
  }
}
