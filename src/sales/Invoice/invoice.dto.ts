import { ApiProperty } from '@nestjs/swagger';

export class InvoiceDto {
  @ApiProperty({ example: 'INV-2023-May-11-0002' })
  refNo : string;
  @ApiProperty({ example: 'bruce' })
  clients: string;
  @ApiProperty({ example: 'huqer' })
  projects: string;
  @ApiProperty({ example: '20-09-203' })
  invoiceDate: string;
  @ApiProperty({ example: '01-10-2023' })
  dueDate: string;
  @ApiProperty({ example: '50000' })
  discountType: string;
  @ApiProperty({ example: 'w1' }) 
  warehouse: string;
  @ApiProperty({ example: '@everyone' }) 
  tags: string;
  @ApiProperty({ example: 'youin' }) 
  salesAgent: string;
  @ApiProperty({ example: true }) 
  allowPaypal: boolean;
  @ApiProperty({ example: true }) 
  allowStripe: boolean;
  @ApiProperty({ example: true }) 
  allowAuthorizenet: boolean;
  @ApiProperty({ example: true }) 
  allowCcavenue: boolean;
  @ApiProperty({ example: true }) 
  allowBraintree: boolean;
  @ApiProperty({ example: true }) 
  allowMollie: boolean;
  @ApiProperty({ example: true }) 
  allowPayumoney: boolean;
  @ApiProperty({ example: 'Thank you for your busasiness. Please process this invoice within the due date.' }) 
  notes: string;
}
