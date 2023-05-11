import { ApiProperty } from '@nestjs/swagger';

export class SalaryDto {
  @ApiProperty({ example: '3' })
  salaryGrades : number;
  @ApiProperty({ example: '100000' })
  basicSalary: number;
  @ApiProperty({ example: '45' })
  rateHour: number;
  @ApiProperty({ example: '45' })
  houseRentAllowance: number;
  @ApiProperty({ example: '45' })
  medicalAllowance: number;
  @ApiProperty({ example: '45' })
  providentFund: number;
  @ApiProperty({ example: '45' })
  taxDeduction: number;
}
