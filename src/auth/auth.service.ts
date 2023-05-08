import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(username);
    const passwordValidate = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('User not found');
    }
    if (user && passwordValidate) {
      return {
        userId: user,
        username: user.username,
      };
    }
    return null;
  }
}
