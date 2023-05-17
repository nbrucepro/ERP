import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotesSchema } from './quotes.model';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'quotesdb',
        useFactory: () => {
          const schema = QuotesSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [QuotesService],
  controllers: [QuotesController],
})
export class QuotesModule {}
