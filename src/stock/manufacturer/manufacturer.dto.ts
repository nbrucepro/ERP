import { ApiProperty } from '@nestjs/swagger';

export class ManufacturerDto {
  @ApiProperty({ example: 'maname' })
  name: string;
  @ApiProperty({ example: 'This is Manufacturer from ...' })
  description: string;
}
