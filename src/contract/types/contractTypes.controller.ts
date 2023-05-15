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
import { ContractTypesDto } from './contractTypes.dto';
import { ContractTypesService } from './contractTypes.service';

@ApiTags('Contract')
@Controller('api/contracttypes')
export class ContractTypesController {
  constructor(private readonly contractTypesService: ContractTypesService) {}

  @Post()
  async create(@Body() contractTypesDto: ContractTypesDto) {
    return this.contractTypesService.create(contractTypesDto);
  }

  @Get()
  async findAll() {
    return this.contractTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.contractTypesService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() contractTypesDto: ContractTypesDto) {
    return this.contractTypesService.update(id, contractTypesDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.contractTypesService.remove(id)){
      return "contractType deleted successfully!"
    }
  }
}
