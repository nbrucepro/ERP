import { ApiProperty } from '@nestjs/swagger';

export class ItemDto {
  @ApiProperty({ example: 'john doe' })
  fullName: string;
  @ApiProperty({ example: 'johndoe' })
  username: string;

  @ApiProperty({ example: 'pass1' })
  password: string;
  @ApiProperty({ example: 'pass1' })
  confirmPassword: string;

  @ApiProperty({ example: 'john@gmail.com' })
  email: string;
  @ApiProperty({ example: 'comp1' })
  companyName: string;
  @ApiProperty({ example: 'info@comp1.com' }) 
  companyEmail: string;
}
