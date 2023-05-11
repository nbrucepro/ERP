import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import UsersModule from './users/users.module';
// import { ItemsModule } from './stock/item/items.module';
import { SupplierModule } from './stock/supplier/supplier.module';
import { ItemsModule } from './stock/item/items.module';
import { WarehouseModule } from './stock/warehouse/warehouse.module';
import { GrouplistModule } from './stock/grouplist/grouplist.module';
import { ManufacturerModule } from './stock/manufacturer/manufacturer.module';
@Module({
  imports: [
    AdminModule,
    UsersModule,
    AdminModule,
    // MongooseModule.forRoot('mongodb://localhost/erpdb'),
    MongooseModule.forRoot('mongodb+srv://bruce:bruce@cluster0.exmgv.mongodb.net/erpdb'),
    ItemsModule,
    GrouplistModule,
    ManufacturerModule,
    SupplierModule,
    WarehouseModule
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {
  
}
