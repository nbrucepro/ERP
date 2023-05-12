import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsSchema } from './clients.model';
import { ClientsService } from './clients.service';
import { ClientsController } from './clients.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'clients',
          useFactory: () => {
            const schema = ClientsSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [ClientsService],
 controllers: [ClientsController]
})
export class ClientsModule {}
