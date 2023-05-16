import { ApiProperty } from '@nestjs/swagger';

export class TerminationTypesDto {
  @ApiProperty({ example: 'type3' })
  name: string;

  @ApiProperty({ example: 'description' })
  description: string;
}
