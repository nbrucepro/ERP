import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<UserDocument>,
  ) {}
  async createUser(username: string, password: string): Promise<User> {
    return this.userModel.create({ username, password });
  }
  async getUser(query: string): Promise<User> {
    return this.userModel.findOne({username:query});
  }
}
