import { ApiProperty } from '@nestjs/swagger';

export class TerminationDto {
  @ApiProperty({ example: 'employeeName' })
  employeeName: string;

  @ApiProperty({ example: 'terminationType' })
  terminationType: string;

  @ApiProperty({ example: 'attachment' })
  attachment: string;

  @ApiProperty({ example: '01-03-2023' })
  noticeDate: string;

  @ApiProperty({ example: '31-05-2023' })
  terminationDate: string;

  @ApiProperty({ example: 'termination-desctiption' })
  description: string;
}
