import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import  UsersModule  from './users/users.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
// import  AuthModule  from './auth/auth.module';

@Module({
  imports: [
    AdminModule,
    UsersModule,
    AdminModule,
    MongooseModule.forRoot('mongodb://localhost/erpdb'),
    // MongooseModule.forRoot('mongodb+srv://bruce:bruce@cluster0.exmgv.mongodb.net/erpdb'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 