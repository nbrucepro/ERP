import { ApiProperty } from '@nestjs/swagger';

export class DepartmentDto {
  @ApiProperty({example:'dep-name'})
  name: string;
  @ApiProperty({ example: '@all' })
  designation: string;
}
