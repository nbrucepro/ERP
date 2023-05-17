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
import { ShippingProviderDto } from './shippingProvider.dto';
import { ShippingProviderService } from './shippingProvider.service';

@ApiTags('Shipping-Provider')
@Controller('api/shippingprovider')
export class ShippingProviderController {
  constructor(private readonly shippingProviderService: ShippingProviderService) {}

  @Post()
  async create(@Body() shippingProviderDto: ShippingProviderDto) {
    return this.shippingProviderService.create(shippingProviderDto);
  }

  @Get()
  async findAll() {
    return this.shippingProviderService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const shippingProvider = this.shippingProviderService.findOne(id);

    return shippingProvider;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() shippingProviderDto: ShippingProviderDto) {
    return this.shippingProviderService.update(id, shippingProviderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.shippingProviderService.remove(id);
  }
}
