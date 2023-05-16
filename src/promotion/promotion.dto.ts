import { ApiProperty } from '@nestjs/swagger';

export class PromotionDto {
  @ApiProperty({ example: 'employee#4582' })
  employee: string;

  @ApiProperty({ example: "designation" })
  designation: string;

  @ApiProperty({ example: 'promotionTitle' })
  promotionTitle: string;

  @ApiProperty({ example: '20-05-2023' })
  promotionDate: string;

  @ApiProperty({ example: 'description' })
  description: string;
}
