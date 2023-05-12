import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BankAccountSchema } from './bankAccount.model';
import { BankAccountService } from './bankAccount.service';
import { BankAccountController } from './bankAccount.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'bankAccount',
          useFactory: () => {
            const schema = BankAccountSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [BankAccountService],
 controllers: [BankAccountController]
})
export class BankAccountModule {}
