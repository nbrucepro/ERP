import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BugsSchema } from './bugs.model';
import { BugsService } from './bugs.service';
import { BugsController } from './bugs.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'bugsdb',
        useFactory: () => {
          const schema = BugsSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [BugsService],
  controllers: [BugsController],
})
export class BugsModule {}
