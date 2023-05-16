import { ApiProperty } from '@nestjs/swagger';

export class TimeChangeRequestDto {
  @ApiProperty({ example: '20-07-2023' })
  dateIn: string;

  @ApiProperty({ example: '20:25' })
  clockIn: string;

  @ApiProperty({ example: '20-09-2023' })
  dateOut: string;

  @ApiProperty({ example: '21:25' })
  clockOut: string;
}
