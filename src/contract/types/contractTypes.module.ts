import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContractTypesSchema } from './contractTypes.model';
import { ContractTypesService } from './contractTypes.service';
import { ContractTypesController } from './contractTypes.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'contract_typesdb',
        useFactory: () => {
          const schema = ContractTypesSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [ContractTypesService],
  controllers: [ContractTypesController],
})
export class ContractTypesModule {}
