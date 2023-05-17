import { ApiProperty } from '@nestjs/swagger';

export class TargetListDto {
  @ApiProperty({ example: 'name#4582' })
  name: string;

  @ApiProperty({ example: 'description' })
  description: string;

  @ApiProperty({ example: 'assignedUser' })
  assignedUser: string;

  @ApiProperty({ example: 'teams' })
  teams: string;

  @ApiProperty({ example: false })
  sync: boolean;
}
