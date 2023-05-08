import {
  Body,
  Controller,
  Get,
  NotAcceptableException,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('auth')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  
  @Post('/signup')
  @ApiBody({
    description: 'New user',
    isArray: true,
    schema: {
      type: 'object',
      example: {
        username: 'user6',
        password: 'pass6',
        role: 'admin'
      },
    },
  })
  @ApiCreatedResponse({
    description: 'User created successfully',
    type: User,
  })
  async createUser(
    @Body('password') password: string,
    @Body('username') username: string,
  ): Promise<User> {
    const saltOrRounds = 10;
    const hasspassword = await bcrypt.hash(password, saltOrRounds);
    const result = await this.usersService.createUser(username, hasspassword);
    return result;
  }

  @Post('/login')
  @ApiBody({
    description: 'New user',
    isArray: true,
    schema: {
      type: 'object',
      example: {
        username: 'user6',
        password: 'pass6',
      },
    },
  })
  async validateUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<any> {
    const user = await this.usersService.getUser(username);
    const passwordValidate = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('User not found');
    }
    if (user && passwordValidate) {
      return {
        user,
        access_token: this.jwtService.sign({
          userid: user.id,
          username: user.username,
        }),
      };
    }
    return null;
  }
}
