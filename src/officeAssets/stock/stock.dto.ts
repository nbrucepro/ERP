import { ApiProperty } from '@nestjs/swagger';

export class StockDto {
  @ApiProperty({ example: 'category-name' })
  stock_category: string;

  @ApiProperty({ example: 'buying-date' })
  buying_date: string;

  @ApiProperty({ example: 'item-name' })
  item_name: string;

  @ApiProperty({ example: 'inventory-name' })
  inventory: string;
}
