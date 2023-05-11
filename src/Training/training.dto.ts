import { ApiProperty } from '@nestjs/swagger';

export class TrainingDto {
  @ApiProperty({ example: 'John' })
  Employee: string;
  @ApiProperty({ example: 'This is course' })
  Course : string;
  @ApiProperty({ example: 'John' })
  Vendor: string;
  @ApiProperty({ example: '01/09/2023' })
  startDate: string;
  @ApiProperty({ example: '01/11/2023' })
  finishDate: string;
  @ApiProperty({ example: '50000' })
  trainingCost: number;
  @ApiProperty({ example: 'John' })
  status: string;
  @ApiProperty({ example: 'excellent' })
  performance: string;
  @ApiProperty({ example: 'This is remarks for training' })
  remarks: string;
  @ApiProperty({ example: 'This is remarks for training' })
  Attachment: string;
}
