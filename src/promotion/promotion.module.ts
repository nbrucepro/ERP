import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PromotionSchema } from './promotion.model';
import { PromotionService } from './promotion.service';
import { PromotionController } from './promotion.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'promotionsdb',
        useFactory: () => {
          const schema = PromotionSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [PromotionService],
  controllers: [PromotionController],
})
export class PromotionModule {}
