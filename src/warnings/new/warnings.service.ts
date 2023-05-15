import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WarningsDocument } from './warnings.model';
import { WarningsDto } from './warnings.dto';

@Injectable()
export class WarningsService {
  constructor(
    @InjectModel('warningsdb')
    private readonly warningsModel: Model<WarningsDocument>,
  ) {}

  async create(createWarningsDto: WarningsDto): Promise<any> {
    const warnings = new this.warningsModel(createWarningsDto);
    return warnings.save();
  }

  async findAll(): Promise<any> {
    let warnings = this.warningsModel.find().exec();
    if (warnings === null) {
      return 'warnings not found';
    }
    return warnings;
  }

  async findOne(id: string): Promise<any> {
    const warning = await this.warningsModel.findById(id).exec();
    if (warning === null) {
      return 'warning not found';
    }
    return warning;
  }

  async update(id: string, updateWarningsdto: WarningsDto): Promise<any> {
    const isIthere = await this.warningsModel.findById(id).exec();

    if (isIthere === null) {
      return 'warning not found';
    } else {
      const updated = this.warningsModel.findByIdAndUpdate(
        id,
        updateWarningsdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.warningsModel.findById(id).exec();

    if (isIthere === null) {
      return 'warning not found';
    } else {
      if (await this.warningsModel.findByIdAndRemove(id)) {
        return 'warning deleted successfully!';
      }
    }
  }
}
