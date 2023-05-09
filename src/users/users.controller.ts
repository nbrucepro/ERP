import {
  Body,
  Controller,
  Get,
  Delete,
  NotAcceptableException,
  Post,
  Put,
  Param,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ApiCreatedResponse, ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserDto } from './user.dto';

@ApiTags('Users')
@Controller('api/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  @Post('/signup')
  @ApiCreatedResponse({
    description: 'User created successfully',
    type: User,
  })
  async createUser(@Body() usera: UserDto): Promise<User> {
    const saltOrRounds = 10;
    const hasspassword = await bcrypt.hash(usera.password, saltOrRounds);
    usera.password = hasspassword;
    const result = await this.usersService.createUser(usera);
    return result;
  }

  @Post('/login')
  async validateUser(@Body() usera: UserDto): Promise<any> {
    const founduser = await this.usersService.getUser(usera.username);
    console.log('Found user', founduser._id.toString());
    if (!founduser) {
      throw new NotAcceptableException('User not found');
    }
    const passwordValidate = await bcrypt.compare(
      usera.password,
      founduser.password,
    );
    if (usera && passwordValidate) {
      return {
        usera,
        access_token: this.jwtService.sign({
          userid: founduser?._id.toString(),
          username: usera.username,
        }),
      };
    }
    return null;
  }

  @Put(':id')
   updateUser(@Param() params:any,@Body() updateDto:UserDto):Promise<any> {

    const user = this.usersService.updateUser(params.id,updateDto)    
    return user;
  }


  @Get('/')
  async getUsers() {
    const users = await this.usersService.getAll();
    return users;
  }

  @Get(':id')
  async getOne(@Param() params: any) {
    const user = await this.usersService.getById(params.id);
    if (!user) {
      return 'User not found';
    }
    return user;
  }

  @Delete(':id')
  async deleteUser(@Param() params: any) {
    const deleteduser = this.usersService.deleteOne(params?.id);
    return 'user deleted successfully';
  }
}
