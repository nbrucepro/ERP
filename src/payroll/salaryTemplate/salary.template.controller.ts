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
import { SalaryDto } from './salary.template.dto';
import { SalaryService } from './salary.template.service';

@ApiTags('Salary-template')
@Controller('api/payroll/salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) {}

  @Post()
  async create(@Body() salaryDto: SalaryDto) {
    return this.salaryService.create(salaryDto);
  }

  @Get()
  async findAll() {
    return this.salaryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.salaryService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() salaryDto: SalaryDto) {
    return this.salaryService.update(id, salaryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    if(this.salaryService.remove(id)){
      return "Salary-template deleted successfully!"
    }
  }
}
