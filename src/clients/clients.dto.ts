import { ApiProperty } from '@nestjs/swagger';

export class ClientsDto {
  @ApiProperty({ example: 'name1' })
  companyName: string;
  @ApiProperty({ example: 'name1@info.com' })
  companyEmail: string;
  @ApiProperty({ example: '18' })
  companyVat: string;
  @ApiProperty({ example: 'compnygr' })
  customerGroup: string;
  @ApiProperty({ example: 'english' })
  language: string;
  @ApiProperty({ example: '50usd' })
  currency: string;
  @ApiProperty({ example: false })
  receivesmsNotifications: boolean;
  @ApiProperty({ example: 'short notes are here' })
  shortNote: string;
}
