import { ApiProperty } from '@nestjs/swagger';

export class ContactDto {
  @ApiProperty({ example: 'sample' })
  firstName: string;

  @ApiProperty({ example: 'sample' })
  lastName: string;

  @ApiProperty({ example: 'sample' })
  accounts: string;

  @ApiProperty({ example: 'sample' })
  email: string;

  @ApiProperty({ example: 'sample' })
  mobile: string;

  @ApiProperty({ example: 'sample' })
  city: string;

  @ApiProperty({ example: 'sample' })
  description: string;

  @ApiProperty({ example: 'sample' })
  assignedUser: string;

  @ApiProperty({ example: 'sample' })
  teams: string;
}
