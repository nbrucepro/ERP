import { ApiProperty } from '@nestjs/swagger';

export class CompainsDto {
  @ApiProperty({ example: 'name#4582' })
  name: string;

  @ApiProperty({ example: 'compain-type' })
  type: string;

  @ApiProperty({ example: 1000 })
  budget: number;

  @ApiProperty({ example: 'targetList' })
  targetList: string;

  @ApiProperty({ example: 'description' })
  description: string;

  @ApiProperty({ example: '20-05-2023' })
  startDate: string;

  @ApiProperty({ example: '20-08-2023' })
  endDate: string;

  @ApiProperty({ example: 'excludingTargetList' })
  excludingTargetList: string;

  @ApiProperty({ example: 'assignedUser' })
  assignedUser: string;

  @ApiProperty({ example: 'teams' })
  teams: string;
}
