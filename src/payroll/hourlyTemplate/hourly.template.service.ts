import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HourlyDocument } from './hourly.template.model';
import { HourlyDto } from './hourly.template.dto';

@Injectable()
export class HourlyService {
  constructor(
    @InjectModel('hourly_template')
    private readonly hourlyModel: Model<HourlyDocument>,
  ) {}

  async create(createHourlyDto: HourlyDto): Promise<HourlyDto> {
    const createdHourly = new this.hourlyModel(createHourlyDto);
    return createdHourly.save();
  }

  async findAll(): Promise<any> {
    let hourly = this.hourlyModel.find().exec();
    return hourly;
  }

  async findOne(id: string): Promise<any> {
    return this.hourlyModel.findById(id).exec();
  }

  async update(id: string, updateHourlydto: HourlyDto): Promise<any> {
    return this.hourlyModel.findByIdAndUpdate(id, updateHourlydto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.hourlyModel.findByIdAndRemove(id);
  }
}
