import { ApiProperty } from '@nestjs/swagger';

export class BugsDto {
  @ApiProperty({ example: 'issue#4582' })
  issue: string;

  @ApiProperty({ example: "can't read this property" })
  bugTitle: string;

  @ApiProperty({ example: 'relatedTo' })
  relatedTo: string;

  @ApiProperty({ example: 'relatedTo' })
  reporter: string;

  @ApiProperty({ example: 'priority' })
  priority: string;

  @ApiProperty({ example: 'assignedTo' })
  assignedTo: string;

  @ApiProperty({ example: 'description for the bug' })
  description: string;

  @ApiProperty({ example: 'severity' })
  severity: string;

  @ApiProperty({ example: 'bugStatus' })
  bugStatus: string;

  @ApiProperty({ example: 'reproducibility' })
  reproducibility: string;
}
