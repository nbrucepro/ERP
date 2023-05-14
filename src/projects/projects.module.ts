import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsSchema } from './projects.model';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'projects',
          useFactory: () => {
            const schema = ProjectsSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [ProjectsService],
 controllers: [ProjectsController]
})
export class ProjectsModule {}
