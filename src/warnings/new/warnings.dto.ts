import { ApiProperty } from '@nestjs/swagger';

export class WarningsDto {
  @ApiProperty({ example: 'someone' })
  warningBy: string;

  @ApiProperty({ example: 'else' })
  warningTo: string;

  @ApiProperty({ example: 'disciplinary' })
  warningType: string;

  @ApiProperty({ example: 'attachment' })
  attachment: string;

  @ApiProperty({ example: '01-03-2023' })
  warningDate: string;

  @ApiProperty({ example: 'warning-description' })
  description: string;
}
