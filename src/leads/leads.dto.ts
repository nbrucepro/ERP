import { ApiProperty } from '@nestjs/swagger';

export class LeadsDto {
  @ApiProperty({ example: 'lead-title' })
  title: string;
  @ApiProperty({ example: 'organization-name' })
  organization: string;
  @ApiProperty({ example: 'John' })
  contactName: string;
  @ApiProperty({ example: '077777790' })
  phone: string;
  @ApiProperty({ example: 'newyork' })
  city: string;
  @ApiProperty({ example: 'usa' })
  country: string;
  @ApiProperty({ example: 'English' })
  language: string;
  @ApiProperty({ example: 'live:10304904' })
  skypeId: string;
  @ApiProperty({ example: 'true' })
  contactedToday: string;
  @ApiProperty({ example: '@p1,@p2,@p3,@p4,@p5' })
  tags: string;
  @ApiProperty({ example: 'This is short note' })
  shortNote: string;
  @ApiProperty({ example: 'Status1' })
  leadStatus: string;
  @ApiProperty({ example: 'source1' })
  leadSource: string;
  @ApiProperty({ example: 'email@gmail.com' })
  email: string;
  @ApiProperty({ example: '07812345762' })
  mobile: number;
  @ApiProperty({ example: 'NY' })
  state: string;
  @ApiProperty({ example: 'NY1' })
  address: string;
  @ApiProperty({ example: 'https://twitter.com/me1' })
  twitter: string;
  @ApiProperty({ example: 'https://facebook.com/me1' })
  facebook: string;
}
