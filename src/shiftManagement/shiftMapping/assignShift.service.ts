import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AssignShiftDocument } from './assignShift.model';
import { AssignShiftDto } from './assignShift.dto';

@Injectable()
export class AssignShiftService {
  constructor(
    @InjectModel('assignshiftsdb')
    private readonly assignShiftModel: Model<AssignShiftDocument>,
  ) {}

  async create(createAssignShiftDto: AssignShiftDto): Promise<AssignShiftDto> {
    const assignShift = new this.assignShiftModel(createAssignShiftDto);
    return assignShift.save();
  }

  async findAll(): Promise<any> {
    let shiftt = this.assignShiftModel.find().exec();
    return shiftt;
  }

  async findOne(id: string): Promise<any> {
    return this.assignShiftModel.findById(id).exec();
  }

  async update(id: string, updateAssignShiftdto: AssignShiftDto): Promise<any> {
    return this.assignShiftModel.findByIdAndUpdate(id, updateAssignShiftdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.assignShiftModel.findByIdAndRemove(id);
  }
}
