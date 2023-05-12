import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IndicatorsDocument } from './indicators.model';
import { IndicatorsDto } from './indicators.dto';

@Injectable()
export class IndicatorsService {
  constructor(
    @InjectModel('indicatorsdb')
    private readonly indicatorsModel: Model<IndicatorsDocument>,
  ) {}

  async create(createIndicatorsDto: IndicatorsDto): Promise<IndicatorsDto> {
    const indicators = new this.indicatorsModel(createIndicatorsDto);
    return indicators.save();
  }

  async findAll(): Promise<any> {
    let indicators = this.indicatorsModel.find().exec();
    return indicators;
  }

  async findOne(id: string): Promise<any> {
    return this.indicatorsModel.findById(id).exec();
  }

  async update(id: string, updateIndicatorsdto: IndicatorsDto): Promise<any> {
    return this.indicatorsModel.findByIdAndUpdate(id, updateIndicatorsdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.indicatorsModel.findByIdAndRemove(id);
  }
}
