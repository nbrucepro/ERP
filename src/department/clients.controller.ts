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
import { ClientsDto } from './clients.dto';
import { ClientsService } from './clients.service';

@ApiTags('Clients')
@Controller('api/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  async create(@Body() clientsDto: ClientsDto) {
    return this.clientsService.create(clientsDto);
  }

  @Get()
  async findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() clientsDto: ClientsDto) {
    return this.clientsService.update(id, clientsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.clientsService.remove(id)){
      return "ticket deleted successfully!"
    }
  }
}
