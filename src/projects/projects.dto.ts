import { ApiProperty } from '@nestjs/swagger';

export class ProjectsDto {
  @ApiProperty({ example: '0001' })
  projectsNo: number;

  @ApiProperty({ example: 'projectName' })
  projectName: string;

  @ApiProperty({ example: 'projectCategory' })
  projectCategory: string;

  @ApiProperty({ example: 'projectClient' })
  projectClient: string;

  @ApiProperty({ example: '74%' })
  progress: string;

  @ApiProperty({ example: '20-05-2023' })
  startDate: string;

  @ApiProperty({ example: '21-06-2023' })
  endDate: string;

  @ApiProperty({ example: 'fixed-price' })
  billingType: string;

  @ApiProperty({ example: '50' })
  fixedPrice: string;

  @ApiProperty({ example: '50' })
  hourlyRate: string;

  @ApiProperty({ example: '50' })
  estimateHours: string;

  @ApiProperty({ example: 'billingType' })
  status: string;

  @ApiProperty({ example: 'https://www.demourl.com' })
  demoUrl: string;

  @ApiProperty({ example: '@everyone' })
  tags: string;

  @ApiProperty({ example: 'Project-description' })
  description: string;
}
