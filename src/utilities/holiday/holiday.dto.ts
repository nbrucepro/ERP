import { ApiProperty } from '@nestjs/swagger';

export class HolidayDto {
  @ApiProperty({ example: 'eventName#4582' })
  eventName: string;

  @ApiProperty({ example: 'description' })
  description: string;

  @ApiProperty({ example: '20-05-2023' })
  startDate: string;

  @ApiProperty({ example: '20-05-2023' })
  endDate: string;

  @ApiProperty({ example: 'holiday-location' })
  location: string;
}
