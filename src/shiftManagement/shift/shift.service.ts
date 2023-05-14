import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShiftDocument } from './shift.model';
import { ShiftDto } from './shift.dto';

@Injectable()
export class ShiftService {
  constructor(
    @InjectModel('shifts')
    private readonly shiftModel: Model<ShiftDocument>,
  ) {}

  async create(createShiftDto: ShiftDto): Promise<ShiftDto> {
    const shift = new this.shiftModel(createShiftDto);
    return shift.save();
  }

  async findAll(): Promise<any> {
    let shiftt = this.shiftModel.find().exec();
    return shiftt;
  }

  async findOne(id: string): Promise<any> {
    return this.shiftModel.findById(id).exec();
  }

  async update(id: string, updateShiftdto: ShiftDto): Promise<any> {
    return this.shiftModel.findByIdAndUpdate(id, updateShiftdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.shiftModel.findByIdAndRemove(id);
  }
}
