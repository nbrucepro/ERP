import { ApiProperty } from '@nestjs/swagger';

export class AttendanceDto {
  @ApiProperty({ example: 'employee#4582' })
  employee: string;

  @ApiProperty({ example: true })
  attended: boolean;

  @ApiProperty({ example: '20-04-2023' })
  date: string;
}
