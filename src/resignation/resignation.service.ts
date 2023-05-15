import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResignationDocument } from './resignation.model';
import { ResignationDto } from './resignation.dto';

@Injectable()
export class ResignationService {
  constructor(
    @InjectModel('resignationsdb')
    private readonly resignationModel: Model<ResignationDocument>,
  ) {}

  async create(createResignationDto: ResignationDto): Promise<any> {
    const resignation = new this.resignationModel(createResignationDto);
    return resignation.save();
  }

  async findAll(): Promise<any> {
    let resignation = this.resignationModel.find().exec();
    if (resignation === null) {
      return 'resignations not found';
    }
    return resignation;
  }

  async findOne(id: string): Promise<any> {
    const resignation = await this.resignationModel.findById(id).exec();
    if (resignation === null) {
      return 'resignation not found';
    }
    return resignation;
  }

  async update(id: string, updateResignationdto: ResignationDto): Promise<any> {
    const isIthere = await this.resignationModel.findById(id).exec();

    if (isIthere === null) {
      return 'resignation not found';
    } else {
      const updated = this.resignationModel.findByIdAndUpdate(
        id,
        updateResignationdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.resignationModel.findById(id).exec();

    if (isIthere === null) {
      return 'resignation not found';
    } else {
      if (await this.resignationModel.findByIdAndRemove(id)) {
        return 'resignation deleted successfully!';
      }
    }
  }
}
