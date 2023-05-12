import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketsSchema } from './tickets.model';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';

@Module({
 imports:[
    MongooseModule.forFeatureAsync([
        {
          name: 'tickets',
          useFactory: () => {
            const schema = TicketsSchema;
            schema.pre('save', function () {
              console.log('Hello from ERP pre save');
            });
            return schema;
          },
        },
      ]),
 ],
 providers: [TicketsService],
 controllers: [TicketsController]
})
export class TicketsModule {}
