import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({ example: 'sample' })
  name: string;

  @ApiProperty({ example: 'sample' })
  status: string;

  @ApiProperty({ example: 'sample' })
  category: string;

  @ApiProperty({ example: 'sample' })
  brand: string;

  @ApiProperty({ example: 'sample' })
  teams: string;

  @ApiProperty({ example: 'sample' })
  costPrice: string;

  @ApiProperty({ example: 'sample' })
  pricingType: string;

  @ApiProperty({ example: 'sample' })
  listPrice: string;

  @ApiProperty({ example: 'sample' })
  unitPrice: string;

  @ApiProperty({ example: true })
  taxFree: boolean;

  @ApiProperty({ example: 21929 })
  partNumber: number;

  @ApiProperty({ example: 'sample' })
  weight: string;

  @ApiProperty({ example: 'sample' })
  url: string;

  @ApiProperty({ example: 'sample' })
  photo: string;

  @ApiProperty({ example: 'sample' })
  description: string;
}
