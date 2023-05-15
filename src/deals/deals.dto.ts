import { ApiProperty } from '@nestjs/swagger';

export class DealsDto {
  @ApiProperty({ example: 'deal-title' })
  title: string;

  @ApiProperty({ example: 'deal-value' })
  dealValue: string;

  @ApiProperty({ example: 'source-deal' })
  source: string;

  @ApiProperty({ example: '20-04-2023' })
  closeDate: string;

  @ApiProperty({ example: 'deal-pipeline' })
  pipeline: string;

  @ApiProperty({ example: 'deal-client-name' })
  clientName: string;

  @ApiProperty({ example: 'deal-owner' })
  dealOwner: string;

  @ApiProperty({ example: 'the-dealer' })
  assigne: string;

  @ApiProperty({ example: '@everyone' })
  tags: string;
}
