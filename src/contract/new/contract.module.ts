import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContractSchema } from './contract.model';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'contractsdb',
        useFactory: () => {
          const schema = ContractSchema;
          schema.pre('save', function () {
            console.log('Hello from ERP pre save');
          });
          return schema;
        },
      },
    ]),
  ],
  providers: [ContractService],
  controllers: [ContractController],
})
export class ContractModule {}
