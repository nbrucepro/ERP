import { ApiProperty } from '@nestjs/swagger';

export class AssignShiftDto {
  @ApiProperty({ example: 'Kond' })
  employeeName: string;

  @ApiProperty({ example: 'D5QSFKD' })
  shiftName: string;

  @ApiProperty({ example: '20-10' })
  startDate: string;

  @ApiProperty({ example: '20-20' })
  endDate: string;
}
