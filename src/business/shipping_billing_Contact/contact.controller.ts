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
import { ContactDto } from './contact.dto';
import { ContactService } from './contact.service';

@ApiTags('Contact')
@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() contactDto: ContactDto) {
    return this.contactService.create(contactDto);
  }

  @Get()
  async findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const contact = this.contactService.findOne(id);

    return contact;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() contactDto: ContactDto) {
    return this.contactService.update(id, contactDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
