import { ApiProperty } from '@nestjs/swagger';

export class TasksDto {
  @ApiProperty({ example: 'task1' })
  taskName: string;

  @ApiProperty({ example: 'selectCategory' })
  selectCategory: string;

  @ApiProperty({ example: 'relatedTo' })
  relatedTo: string;

  @ApiProperty({ example: 'startDate' })
  startDate: string;

  @ApiProperty({ example: 'dueDate' })
  dueDate: string;

  @ApiProperty({ example: 'assignedTo' })
  assignedTo: string;

  @ApiProperty({ example: 'hourlRate' })
  hourlRate: string;

  @ApiProperty({ example: 'assignedTo' })
  estimatedHour: string;

  @ApiProperty({ example: '50%' })
  progress: string;

  @ApiProperty({ example: 'done' })
  taskStatus: string;

  @ApiProperty({ example: '@everyone' })
  tags: string;

  @ApiProperty({ example: 'true' })
  billable: string;

  @ApiProperty({ example: 'task-description' })
  taskDescription: string;
}
