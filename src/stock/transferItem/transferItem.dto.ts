import { ApiProperty } from '@nestjs/swagger';

export class TransferItemDto {
  @ApiProperty({ example: '123456' })
  refNo: number;

  @ApiProperty({ example: 'nike air1' })
  item: string;

  @ApiProperty({ example: '$50' })
  shippingCost: string;

  @ApiProperty({ example: '20-07-2022' })
  date: string;

  @ApiProperty({ example: 'attachment' })
  attachment: string;

  @ApiProperty({ example: 'from-warehouse1' })
  from: string;

  @ApiProperty({ example: 'to-warehouse2' })
  to: string;

  @ApiProperty({ example: 'pending' })
  status: string;

  @ApiProperty({ example: 'Description' })
  notes: string;
}
