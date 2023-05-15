import { ApiProperty } from '@nestjs/swagger';

export class ComplaintsTypesDto {
  @ApiProperty({ example: 'type3' })
  name: string;
  }
