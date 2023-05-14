import { ApiProperty } from '@nestjs/swagger';

export class ShiftDto {
  @ApiProperty({ example: 'D5QSFKD' })
  shiftName: string;

  @ApiProperty({ example: '9:40' })
  startTime: string;

  @ApiProperty({ example: '25' })
  minutebeforetheshiftstarts: string;

  @ApiProperty({ example: 'All projects goes here' })
  lunchTime: string;

  @ApiProperty({ example: '20-10' })
  startDate: string;

  @ApiProperty({ example: 'Kond' })
  employeeName: string;

  @ApiProperty({ example: 'approved' })
  status: string;

  @ApiProperty({ example: '12:00' })
  endTime: string;

  @ApiProperty({ example: '30' })
  minuteaftertheshiftends: string;

  @ApiProperty({ example: '20-20' })
  endDate: string;
}
