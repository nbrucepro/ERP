import { ApiProperty } from '@nestjs/swagger';

export class AssignStockDto {
  @ApiProperty({ example: 'category-name' })
  assign_stock_category: string;

  @ApiProperty({ example: 'item-name' })
  item_name: string;

  @ApiProperty({ example: 'employee-name' })
  employee_name: string;

  @ApiProperty({ example: 'inventory-name' })
  inventory: string;

  @ApiProperty({ example: '100' })
  assign_quantity: string;

  @ApiProperty({ example: '10-09-2022' })
  assign_date: string;
  
}
