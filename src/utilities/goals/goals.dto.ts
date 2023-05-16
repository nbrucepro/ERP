import { ApiProperty } from '@nestjs/swagger';

export class GoalsDto {
  @ApiProperty({ example: 'subject#4582' })
  subject: string;

  @ApiProperty({ example: "long-term" })
  goalType: string;

  @ApiProperty({ example: 'targetAchievement' })
  targetAchievement: string;

  @ApiProperty({ example: '20-05-2023' })
  startDate: string;

  @ApiProperty({ example: '20-05-2024' })
  endDate: string;

  @ApiProperty({ example: 'description' })
  description: string;
}
