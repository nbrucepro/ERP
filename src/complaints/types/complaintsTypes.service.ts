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

  async create(
    createComplaintTypesDto: ComplaintsTypesDto,
  ): Promise<ComplaintsTypesDto> {
    const complaintTypes = new this.complaintTypesModel(
      createComplaintTypesDto,
    );
    return complaintTypes.save();
  }

  async findAll(): Promise<any> {
    let complaintTypes = this.complaintTypesModel.find().exec();
    if (complaintTypes === null) {
      return 'complaints types not found';
    }
    return complaintTypes;
  }

  async findOne(id: string): Promise<any> {
    const complaintTypes = this.complaintTypesModel.findById(id).exec();
    if (complaintTypes === null) {
      return 'Complaint type not found';
    }
    return complaintTypes;
  }

  async update(id: string,updateComplaintTypesdto: ComplaintsTypesDto,): Promise<any> {
    const isIthere = await this.complaintTypesModel.findById(id).exec();
    if (isIthere === null) {
      return 'complaint type not found';
    } else {
      const updated = this.complaintTypesModel.findByIdAndUpdate(
        id,
        updateComplaintTypesdto,
        {
          new: true,
        },
      );
      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.complaintTypesModel.findById(id).exec();    
    if (isIthere === null) {
      return 'complaint type not found';
    } else {
      if (await this.complaintTypesModel.findByIdAndRemove(id)) {
        return 'complaint type deleted successfully!';
      }
    }
  }
}
