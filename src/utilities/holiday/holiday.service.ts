import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HolidayDocument } from './holiday.model';
import { HolidayDto } from './holiday.dto';

@Injectable()
export class HolidayService {
  constructor(
    @InjectModel('holidaysdb')
    private readonly holidayModel: Model<HolidayDocument>,
  ) {}

  async create(createHolidayDto: HolidayDto): Promise<any> {
    const holiday = new this.holidayModel(createHolidayDto);
    return holiday.save();
  }

  async findAll(): Promise<any> {
    let holiday = this.holidayModel.find().exec();
    if (holiday === null) {
      return 'holiday not found';
    }
    return holiday;
  }

  async findOne(id: string): Promise<any> {
    const holiday = await this.holidayModel.findById(id).exec();
    if (holiday === null) {
      return 'holiday not found';
    }
    return holiday;
  }

  async update(id: string, updateHolidaydto: HolidayDto): Promise<any> {
    const isIthere = await this.holidayModel.findById(id).exec();

    if (isIthere === null) {
      return 'holiday not found';
    } else {
      const updated = this.holidayModel.findByIdAndUpdate(
        id,
        updateHolidaydto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.holidayModel.findById(id).exec();

    if (isIthere === null) {
      return 'holiday not found';
    } else {
      if (await this.holidayModel.findByIdAndRemove(id)) {
        return 'holiday deleted successfully!';
      }
    }
  }
}
