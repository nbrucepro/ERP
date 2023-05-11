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
import { GrouplistDto } from './grouplist.dto';
import { GrouplistService } from './GrouplistService.service';

@ApiTags('Group-list')
@Controller('api/stock/group')
export class GrouplistController {
  constructor(private readonly grouplistService: GrouplistService) {}

  @Post()
  async create(@Body() grouplistDto: GrouplistDto) {
    return this.grouplistService.create(grouplistDto);
  }

  @Get()
  async findAll() {
    return this.grouplistService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.grouplistService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() grouplistDto: GrouplistDto) {
    return this.grouplistService.update(id, grouplistDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.grouplistService.remove(id)){
      return "user deleted successfully!"
    }
  }
}
