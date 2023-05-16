import { ApiProperty } from '@nestjs/swagger';

export class AnnouncementsDto {
  @ApiProperty({ example: 'title#4582' })
  title: string;

  @ApiProperty({ example: 'description' })
  description: string;

  @ApiProperty({ example: '20-05-2023' })
  startDate: string;

  @ApiProperty({ example: '20-05-2023' })
  endDate: string;

  @ApiProperty({ example: 'attachment' })
  attachment: string;

  @ApiProperty({ example: 'everyone' })
  shareWith: string;

  @ApiProperty({ example: 'pending' })
  status: string;
}
