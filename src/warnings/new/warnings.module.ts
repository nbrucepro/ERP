import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WarningsSchema } from './warnings.model';
import { WarningsService } from './warnings.service';
import { WarningsController } from './warnings.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'warningsdb',
        useFactory: () => {
          const schema = WarningsSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [WarningsService],
  controllers: [WarningsController],
})
export class WarningsModule {}
