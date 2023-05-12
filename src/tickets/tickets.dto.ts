import { ApiProperty } from '@nestjs/swagger';

export class TicketsDto {
  @ApiProperty({ example: 'D5QSFKD' })
  ticketCode: string;
  @ApiProperty({ example: "This is Ticket's subject" })
  subject: string;
  @ApiProperty({ example: 'John' })
  reporter: string;
  @ApiProperty({ example: 'All projects goes here' })
  projects: string;
  @ApiProperty({ example: 'high' })
  priority: string;
  @ApiProperty({ example: 'f9' })
  department: string;
  @ApiProperty({ example: '@everyone' })
  tags: string;
  @ApiProperty({ example: 'attachments goes here' })
  attachments: string;
  @ApiProperty({ example: 'This is message for tickets' })
  ticketMessage: string;
}
