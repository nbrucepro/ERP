import { ApiProperty } from '@nestjs/swagger';
// import mongoose from 'mongoose';

export class SupplierDto {    
  @ApiProperty({ example: 'john doe' })
  name: string;
  @ApiProperty({ example: '07812345678' })
  mobile: string;
  @ApiProperty({ example: '07812345678' })
  phone: string;
  @ApiProperty({ example: 'Kigali' })
  address: string;
  @ApiProperty({ example: '07812345678' })
  vatNumber: string;
//   @ApiProperty()
//   stockItems: ([{ type: mongoose.Schema.Types.ObjectId, ref: 'StockItem' }]);
}
