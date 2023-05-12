import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LeaveDocument } from './leave.model';
import { LeaveDto } from './leave.dto';

@Injectable()
export class LeaveService {
  constructor(
    @InjectModel('leave_applicationdb')
    private readonly leaveModel: Model<LeaveDocument>,
  ) {}

  async create(createLeaveDto: LeaveDto): Promise<LeaveDto> {
    const tickets = new this.leaveModel(createLeaveDto);
    return tickets.save();
  }

  async findAll(): Promise<any> {
    let tickets = this.leaveModel.find().exec();
    return tickets;
  }

  async findOne(id: string): Promise<any> {
    return this.leaveModel.findById(id).exec();
  }

  async update(id: string, updateLeaveDto: LeaveDto): Promise<any> {
    return this.leaveModel.findByIdAndUpdate(id, updateLeaveDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.leaveModel.findByIdAndRemove(id);
  }
}
