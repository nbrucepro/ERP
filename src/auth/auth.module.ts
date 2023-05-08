import { Module } from '@nestjs/common';
import  UsersModule  from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
})
export default class AuthModule {}
