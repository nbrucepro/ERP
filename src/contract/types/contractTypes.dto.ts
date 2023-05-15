import { ApiProperty } from '@nestjs/swagger';

export class ContractTypesDto {
  @ApiProperty({ example: 'type3' })
  name: string;
  }
