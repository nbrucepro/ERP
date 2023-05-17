import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompainsSchema } from './compains.model';
import { CompainsService } from './compains.service';
import { CompainsController } from './compains.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'compainsdb',
        useFactory: () => {
          const schema = CompainsSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [CompainsService],
  controllers: [CompainsController],
})
export class CompainsModule {}
