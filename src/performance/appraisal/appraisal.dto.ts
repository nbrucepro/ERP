import { ApiProperty } from '@nestjs/swagger';

export class AppraisalDto {
  @ApiProperty({ example: 'employee-name' })
  employeeName: string;

  @ApiProperty({ example: 'may' })
  month: string;
  
  @ApiProperty({ example: 'He did it well' })
  description: string;
}
