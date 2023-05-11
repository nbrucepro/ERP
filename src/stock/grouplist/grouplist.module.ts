import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GrouplistSchema } from './grouplist.model';
import { GrouplistService } from './GrouplistService.service';
import { GrouplistController } from './grouplist.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'grouplist',
          useFactory: () => {
            const schema = GrouplistSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [GrouplistService],
 controllers: [GrouplistController]
})
export class GrouplistModule {}
