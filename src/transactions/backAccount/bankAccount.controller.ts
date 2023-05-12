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
import { BankAccountDto } from './bankAccount.dto';
import { BankAccountService } from './bankAccount.service';

@ApiTags('Transactions/bank')
@Controller('api/transactions/bankaccount')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post()
  async create(@Body() bankAccountDto: BankAccountDto) {
    return this.bankAccountService.create(bankAccountDto);
  }

  @Get()
  async findAll() {
    return this.bankAccountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bankAccountService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() bankAccountDto: BankAccountDto) {
    return this.bankAccountService.update(id, bankAccountDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.bankAccountService.remove(id)){
      return "bank-account deleted successfully!"
    }
  }
}
