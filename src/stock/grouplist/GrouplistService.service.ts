import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GrouplistDocument } from './grouplist.model';
import { GrouplistDto } from './grouplist.dto';

@Injectable()
export class GrouplistService {
  constructor(
    @InjectModel('grouplist')
    private readonly grouplistModel: Model<GrouplistDocument>,
  ) {}

  async create(createGroupDto: GrouplistDto): Promise<GrouplistDto> {
    const createdGroup = new this.grouplistModel(createGroupDto);
    return createdGroup.save();
  }

  async findAll(): Promise<any> {
    let grouplist = this.grouplistModel.find().exec();
    return grouplist;
  }

  async findOne(id: string): Promise<any> {
    return this.grouplistModel.findById(id).exec();
  }

  async update(id: string, updateGroupdto: GrouplistDto): Promise<any> {
    return this.grouplistModel.findByIdAndUpdate(id, updateGroupdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.grouplistModel.findByIdAndRemove(id);
  }
}
