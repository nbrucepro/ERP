import { ApiProperty } from '@nestjs/swagger';

export class PurchaseDto {
  @ApiProperty({ example: '123456' })
  refNo: number;

  @ApiProperty({ example: 'ubyz' })
  supplier: string;

  @ApiProperty({ example: '20-07-2022' })
  purchaseDate: string;

  @ApiProperty({ example: '20-07-2022' })
  dueDate: string;

  @ApiProperty({ example: 'warehouse1' })
  warehouse: string;

  @ApiProperty({ example: 'user1' })
  user: string;

  @ApiProperty({ example: 'purchase agent' })
  purchaseAgent: string;

  @ApiProperty({ example: 'no' })
  updateStock: string;

  @ApiProperty({ example: 'nike air 1' })
  item: string;

  @ApiProperty({ example: 'amature' })
  discountType: string;

  @ApiProperty({ example: '@all' })
  tags: string;

  @ApiProperty({ example: 'Description' })
  notes: string;
}
