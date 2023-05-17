import { ApiProperty } from '@nestjs/swagger';

export class SalesOrderDto {
  @ApiProperty({ example: 'name#4582' })
  name: string;

  @ApiProperty({ example: 'quotename#4582' })
  quote: string;

  @ApiProperty({ example: 'sample' })
  status: string;

  @ApiProperty({ example: 'sample' })
  account: string;

  @ApiProperty({ example: 10000 })
  amount: number;

  @ApiProperty({ example: 'sample' })
  opportunity: string;

  @ApiProperty({ example: '10-02-2023' })
  dateOrdered: string;

  @ApiProperty({ example: 10000 })
  number: number;

  @ApiProperty({ example: 'sample' })
  billingAddressStreet: string;

  @ApiProperty({ example: 'sample' })
  billingAddressCity: string;

  @ApiProperty({ example: 'sample' })
  billingAddressCounty: string;

  @ApiProperty({ example: 'sample' })
  billingAddressPostalCode: string;

  @ApiProperty({ example: 'sample' })
  billingAddressCountry: string;

  @ApiProperty({ example: 'sample' })
  shippingAddressStreet: string;

  @ApiProperty({ example: 'sample' })
  shippingAddressCity: string;

  @ApiProperty({ example: 'sample' })
  shippingAddressCounty: string;

  @ApiProperty({ example: 'sample' })
  shippingAddressPostalCode: string;

  @ApiProperty({ example: 'sample' })
  shippingAddressCountry: string;

  @ApiProperty({ example: 'sample' })
  billingContact: string;

  @ApiProperty({ example: 'sample' })
  shippingContact: string;

  @ApiProperty({ example: 'sample' })
  tax: string;

  @ApiProperty({ example: 'sample' })
  shippingProvider: string;

  @ApiProperty({ example: 'sample' })
  description: string;

  @ApiProperty({ example: 'sample' })
  itemName: string;

  @ApiProperty({ example: 'sample' })
  itemQty: string;

  @ApiProperty({ example: 'sample' })
  itemTaxRate: string;

  @ApiProperty({ example: 'sample' })
  itemListPrice: string;

  @ApiProperty({ example: 'sample' })
  itemUnitPrice: string;

  @ApiProperty({ example: 'sample' })
  itemCurrency: string;
}
