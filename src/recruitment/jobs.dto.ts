import { ApiProperty } from '@nestjs/swagger';

export class JobsDto {
  @ApiProperty({ example: 'job-title' })
  jobTitle: string;
  @ApiProperty({ example: 'designation' })
  designation: string;
  @ApiProperty({ example: 'job Nature' })
  jobNature: string;
  @ApiProperty({ example: '7 years' })
  experience: string;
  @ApiProperty({ example: '25' })
  age: string;
  @ApiProperty({ example: 'negotiable' })
  salaryRange: string;
  @ApiProperty({ example: 'English' })
  vacancy: string;
  @ApiProperty({ example: '20-10-2023' })
  postedDate: string;
  @ApiProperty({ example: '25-12-2023' })
  lastDateToApply: string;
  @ApiProperty({ example: 'description' })
  description: string;
  @ApiProperty({ example: 'published' })
  status: string;
}
