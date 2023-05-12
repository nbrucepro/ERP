import { ApiProperty } from '@nestjs/swagger';

export class CategoryDto {
  @ApiProperty({example:'category-name'})
  name: string;
  @ApiProperty({ example: 'sub-category' })
  sub: string;
}
