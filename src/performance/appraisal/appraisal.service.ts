import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppraisalDocument } from './appraisal.model';
import { AppraisalDto } from './appraisal.dto';

@Injectable()
export class AppraisalService {
  constructor(
    @InjectModel('appraisals')
    private readonly appraisalModel: Model<AppraisalDocument>,
  ) {}

  async create(createAppraisalDto: AppraisalDto): Promise<AppraisalDto> {
    const tickets = new this.appraisalModel(createAppraisalDto);
    return tickets.save();
  }

  async findAll(): Promise<any> {
    let tickets = this.appraisalModel.find().exec();
    return tickets;
  }

  async findOne(id: string): Promise<any> {
    return this.appraisalModel.findById(id).exec();
  }

  async update(id: string, updateAppraisalDto: AppraisalDto): Promise<any> {
    return this.appraisalModel.findByIdAndUpdate(id, updateAppraisalDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.appraisalModel.findByIdAndRemove(id);
  }
}
