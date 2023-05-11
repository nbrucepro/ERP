import { ApiProperty } from '@nestjs/swagger';

export class WarehouseDto {    
  @ApiProperty({ example: '123456' })
  warehouseCode : number;
  @ApiProperty({ example: 'john doe' })
  warehouseName: string;
  @ApiProperty({ example: '07812345678' })
  phone: string;
  @ApiProperty({ example: '07812345678' })
  mobile: string;
  @ApiProperty({ example: 'w1@info.com' })
  email: string;
  @ApiProperty({ example: 'Kigali' })
  address: string;
  @ApiProperty({ example: 'file1' })
  image: string;
  @ApiProperty({ example: 'published' })
  status: string;
}
