import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LeadsDocument } from './leads.model';
import { LeadsDto } from './leads.dto';

@Injectable()
export class LeadsService {
  constructor(
    @InjectModel('leadsdb')
    private readonly leadsModel: Model<LeadsDocument>,
  ) {}

  async create(createLeadsDto: LeadsDto): Promise<LeadsDto> {
    const leads = new this.leadsModel(createLeadsDto);
    return leads.save();
  }

  async findAll(): Promise<any> {
    let leads = this.leadsModel.find().exec();
    return leads;
  }

  async findOne(id: string): Promise<any> {
    return this.leadsModel.findById(id).exec();
  }

  async update(id: string, updateLeadsdto: LeadsDto): Promise<any> {
    return this.leadsModel.findByIdAndUpdate(id, updateLeadsdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.leadsModel.findByIdAndRemove(id);
  }
}
