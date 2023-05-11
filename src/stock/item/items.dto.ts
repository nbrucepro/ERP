import { ApiProperty } from '@nestjs/swagger';

export class StockItemDto {
  @ApiProperty({ example: 'Nike air' })
  itemName: string;
  @ApiProperty({ example: 'nikeAir1' })
  code: string;
  @ApiProperty({ example: 'huqer' })
  barcodeSymbology: string;
  @ApiProperty({ example: 'pass1' })
  Manufacturer: string;
  @ApiProperty({ example: '645cd8bb951936068ef90b95' })
  warehouse: string;
  @ApiProperty({ example: '50000' })
  costPrice: number;
  @ApiProperty({ example: '60000' }) 
  salesPrice: number;
  @ApiProperty({ example: 'pc' }) 
  unitType: string;
  @ApiProperty({ example: '10' }) 
  quantity: number;
  @ApiProperty({ example: 'gr1' }) 
  itemGroup: string;
  @ApiProperty({ example: '10000' }) 
  tax: number;
}
