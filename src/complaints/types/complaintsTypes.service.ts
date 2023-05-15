import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComplaintsTypesDocument } from './complaintsTypes.model';
import { ComplaintsTypesDto } from './complaintsTypes.dto';

@Injectable()
export class ComplaintsTypesService {
  constructor(
    @InjectModel('complaint_typesdb')
    private readonly complaintTypesModel: Model<ComplaintsTypesDocument>,
  ) {}

  async create(createComplaintTypesDto: ComplaintsTypesDto): Promise<ComplaintsTypesDto> {
    const complaintTypes = new this.complaintTypesModel(createComplaintTypesDto);
    return complaintTypes.save();
  }

  async findAll(): Promise<any> {
    let complaintTypes = this.complaintTypesModel.find().exec();
    return complaintTypes;
  }

  async findOne(id: string): Promise<any> {
    return this.complaintTypesModel.findById(id).exec();
  }

  async update(id: string, updateComplaintTypesdto: ComplaintsTypesDto): Promise<any> {
    return this.complaintTypesModel.findByIdAndUpdate(id, updateComplaintTypesdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.complaintTypesModel.findByIdAndRemove(id);
  }
}
