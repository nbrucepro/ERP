import { ApiProperty } from '@nestjs/swagger';

export class ResignationDto {
  @ApiProperty({ example: 'employeeName' })
  employeeName: string;

  @ApiProperty({ example: '20-01-2023' })
  resignationDate: string;

  @ApiProperty({ example: '20-04-2023' })
  lastResignationDate: string;

  @ApiProperty({ example: 'description for resignation' })
  description: string;
}
