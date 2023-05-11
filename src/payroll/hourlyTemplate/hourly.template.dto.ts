import { ApiProperty } from '@nestjs/swagger';

export class HourlyDto {
  @ApiProperty({ example: '3' })
  hourlyGrade : number;
  @ApiProperty({ example: '100' })
  hourlyRate: number;
}
