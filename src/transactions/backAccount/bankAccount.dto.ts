import { ApiProperty } from '@nestjs/swagger';

export class BankAccountDto {
  @ApiProperty({ example: 'account-name' })
  name: string;
  @ApiProperty({ example: 'This is the description for this bank account' })
  description: string;
  @ApiProperty({ example: '1000' })
  initialBalance: number;
  @ApiProperty({ example: '10712903475' })
  accontNumber: number;
  @ApiProperty({ example: 'peter' })
  contactPerson: string;
  @ApiProperty({ example: '0781234567' })
  phone: string;
  @ApiProperty({ example: 'Other-details-for-bank-account' })
  bankDetails: string;
}
