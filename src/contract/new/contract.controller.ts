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
import { ContractDto } from './contract.dto';
import { ContractService } from './contract.service';

@ApiTags('Contract')
@Controller('api/contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  async create(@Body() contractDto: ContractDto) {
    return this.contractService.create(contractDto);
  }

  @Get()
  async findAll() {
    return this.contractService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const complaint = this.contractService.findOne(id);
 
    return complaint;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() contractDto: ContractDto) {
    return this.contractService.update(id, contractDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.contractService.remove(id)){
      return "contract deleted successfully!"
    }
    return "contract not found"
  }
}
