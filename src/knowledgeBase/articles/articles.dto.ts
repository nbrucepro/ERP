import { ApiProperty } from '@nestjs/swagger';

export class ArticlesDto {
  @ApiProperty({ example: 'article-title' })
  title: string;
  @ApiProperty({ example: 'article-slug' })
  slug: string;
  @ApiProperty({ example: "category-1" })
  category: string;
  @ApiProperty({ example: true })
  onlyforinternal: boolean;
  @ApiProperty({ example: "active" })
  status: string;  
  @ApiProperty({ example: "article-desciption will go down here" })
  description: string;  
  @ApiProperty({ example: "attachments" })
  attachment: string;  
}