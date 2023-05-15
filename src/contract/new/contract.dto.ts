import { ApiProperty } from '@nestjs/swagger';

export class ContractDto {
  @ApiProperty({ example: 'subject' })
  subject: string;

  @ApiProperty({ example: 'client' })
  client: string;

  @ApiProperty({ example: 'project1' })
  projects: string;

  @ApiProperty({ example: 'type3' })
  type: string;

  @ApiProperty({ example: '01-03-2023' })
  startDate: string;

  @ApiProperty({ example: '31-05-2023' })
  endDate: string;

  @ApiProperty({ example: 'attachment' })
  contractValue: string;

  @ApiProperty({ example: 'Steps-to-solve-the-bug' })
  description: string;

  @ApiProperty({ example: 'open' })
  visibleToClient: string;
}
