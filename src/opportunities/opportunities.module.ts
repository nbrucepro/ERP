import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OpportunitiesSchema } from './opportunities.model';
import { OpportunitiesService } from './opportunities.service';
import { OpportunitiesController } from './opportunities.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'opportunitiesdb',
        useFactory: () => {
          const schema = OpportunitiesSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [OpportunitiesService],
  controllers: [OpportunitiesController],
})
export class OpportunitiesModule {}
