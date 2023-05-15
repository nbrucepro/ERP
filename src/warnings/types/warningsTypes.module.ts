import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WarningsTypesSchema } from './warningsTypes.model';
import { WarningsTypesService } from './warningsTypes.service';
import { WarningsTypesController } from './warningsTypes.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'warnings_typesdb',
        useFactory: () => {
          const schema = WarningsTypesSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [WarningsTypesService],
  controllers: [WarningsTypesController],
})
export class WarningsTypesModule {}
