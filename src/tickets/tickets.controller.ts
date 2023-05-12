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
import { TicketsDto } from './tickets.dto';
import { TicketsService } from './tickets.service';

@ApiTags('Tickets')
@Controller('api/tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  async create(@Body() ticketsDto: TicketsDto) {
    return this.ticketsService.create(ticketsDto);
  }

  @Get()
  async findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() ticketsDto: TicketsDto) {
    return this.ticketsService.update(id, ticketsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.ticketsService.remove(id)){
      return "ticket deleted successfully!"
    }
  }
}
