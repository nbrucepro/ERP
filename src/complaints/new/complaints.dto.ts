import { ApiProperty } from '@nestjs/swagger';

export class ComplaintsDto {
  @ApiProperty({ example: 'WZVESUY' })
  complaintCode: string;

  @ApiProperty({ example: 'complaint-subject' })
  description: string;

  @ApiProperty({ example: 'select-clients' })
  client: string;

  @ApiProperty({ example: 'type3' })
  type: string;

  @ApiProperty({ example: '01-03-2023' })
  complaintDate: string;

  @ApiProperty({ example: '31-05-2023' })
  dueDate: string;

  @ApiProperty({ example: 'attachment' })
  attachment: string;

  @ApiProperty({ example: 'Steps-to-solve-the-bug' })
  procedureToSolve: string;

  @ApiProperty({ example: 'open' })
  Status: string;
}
