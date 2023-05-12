import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './category.model';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'office_assets_category',
        useFactory: () => {
          const schema = CategorySchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class OfficeCategoryModule {}
