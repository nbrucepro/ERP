import { ApiProperty } from '@nestjs/swagger';

export class ShippingProviderDto {
  @ApiProperty({ example: 'name' })
  name: string;

  @ApiProperty({ example: 'https://webiste.com' })
  webiste: string;
}
