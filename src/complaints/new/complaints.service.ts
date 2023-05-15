import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ComplaintsDocument } from './complaints.model';
import { ComplaintsDto } from './complaints.dto';

@Injectable()
export class ComplaintsService {
  constructor(
    @InjectModel('complaintsdb')
    private readonly complaintsModel: Model<ComplaintsDocument>,
  ) {}

  async create(createComplaintsDto: ComplaintsDto): Promise<any> {
    const complaints = new this.complaintsModel(createComplaintsDto);
    return complaints.save();
  }

  async findAll(): Promise<any> {
    let complaints = this.complaintsModel.find().exec();
    if (complaints === null) {
      return 'complaints not found';
    }
    return complaints;
  }

  async findOne(id: string): Promise<any> {
    const complaint = await this.complaintsModel.findById(id).exec();
    if (complaint === null) {
      return 'Complaint not found';
    }
    return complaint;
  }

  async update(id: string, updateComplaintsdto: ComplaintsDto): Promise<any> {
    const isIthere = await this.complaintsModel.findById(id).exec();

    if (isIthere === null) {
      return 'complaint not found';
    } else {
      const updated = this.complaintsModel.findByIdAndUpdate(
        id,
        updateComplaintsdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.complaintsModel.findById(id).exec();

    if (isIthere === null) {
      return 'complaint not found';
    } else {
      if (await this.complaintsModel.findByIdAndRemove(id)) {
        return 'complaint deleted successfully!';
      }
    }
  }
}
