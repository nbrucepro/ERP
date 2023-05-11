import { ApiProperty } from '@nestjs/swagger';

export class GrouplistDto {
  @ApiProperty({ example: 'grp1' })
  name: string;
  @ApiProperty({ example: 'This is grp1' })
  description: string;
}
