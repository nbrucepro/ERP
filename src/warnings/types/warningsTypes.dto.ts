import { ApiProperty } from '@nestjs/swagger';

export class WarningsTypesDto {
  @ApiProperty({ example: 'type3' })
  name: string;

  @ApiProperty({ example: 'some-descriptions' })
  description: string;
}
