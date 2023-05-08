import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.model';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/config/jwt.config';

@Module({
  imports: [JwtModule.registerAsync(jwtConfig), MongooseModule.forFeature([{ name: 'users', schema: userSchema }])],
  providers: [UsersService],
  controllers: [UsersController],
})
export default class UsersModule {}
