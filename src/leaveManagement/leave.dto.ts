import { ApiProperty } from '@nestjs/swagger';

export class LeaveDto {
  @ApiProperty({ example: 'user-name' })
  user: string;

  @ApiProperty({ example: 'cat1' })
  category: string;
  
  @ApiProperty({ example: 'multiple-days' })
  duration: string;
  
  @ApiProperty({ example: '20-07-2023' })
  startDate: string;
  
  @ApiProperty({ example: 'This is the reason behind my application to leave' })
  reason: string;
  
  @ApiProperty({ example: 'attachment is here' })
  attachment: string;
}
