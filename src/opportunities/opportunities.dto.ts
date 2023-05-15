import { ApiProperty } from '@nestjs/swagger';

export class OpportunitiesDto {
  @ApiProperty({ example: 'opportunityName' })
  opportunityName: string;

  @ApiProperty({ example: '20' })
  probabilityOfWinning: number;

  @ApiProperty({ example: 'currentState' })
  currentState: string;

  @ApiProperty({ example: '50' })
  expectedRevenue: number;

  @ApiProperty({ example: 'publish' })
  nextAction: string;

  @ApiProperty({ example: 'person1' })
  responsible: string;

  @ApiProperty({ example: 'allevels' })
  stages: string;

  @ApiProperty({ example: '20-01-2023' })
  forecastCloseDate: string;

  @ApiProperty({ example: 'http://newlink.com' })
  addNewLink: string;

  @ApiProperty({ example: '20-04-2023' })
  nexActionDate: string;

  @ApiProperty({ example: 'shortNote' })
  shortNote: string;
}
