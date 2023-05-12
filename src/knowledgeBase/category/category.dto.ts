import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({ example: 'category1' })
  name: string;
  @ApiProperty({ example: 'This is category1' })
  description: string;
  @ApiProperty({ example: "category's order" })
  order: string;
  @ApiProperty({ example: "active" })
  status: string;
}