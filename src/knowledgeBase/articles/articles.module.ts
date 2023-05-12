import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesSchema } from './articles.model';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'articles',
          useFactory: () => {
            const schema = ArticlesSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [ArticlesService],
 controllers: [ArticlesController]
})
export class ArticlesModule {}
