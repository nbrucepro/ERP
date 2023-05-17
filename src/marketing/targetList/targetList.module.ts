import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TargetListSchema } from './targetList.model';
import { TargetListService } from './targetList.service';
import { TargetListController } from './targetList.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'targetlistsdb',
        useFactory: () => {
          const schema = TargetListSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [TargetListService],
  controllers: [TargetListController],
})
export class TargetListModule {}
