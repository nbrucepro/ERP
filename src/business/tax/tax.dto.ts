import { ApiProperty } from '@nestjs/swagger';

export class TaxDto {
  @ApiProperty({ example: 'name#4582' })
  name: string;

  @ApiProperty({ example: '30%' })
  rate: string;
}
