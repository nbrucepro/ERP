import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TerminationDocument } from './termination.model';
import { TerminationDto } from './termination.dto';

@Injectable()
export class TerminationService {
  constructor(
    @InjectModel('terminationsdb')
    private readonly terminationModel: Model<TerminationDocument>,
  ) {}

  async create(createTerminationDto: TerminationDto): Promise<any> {
    const termination = new this.terminationModel(createTerminationDto);
    return termination.save();
  }

  async findAll(): Promise<any> {
    let termination = this.terminationModel.find().exec();
    if (termination === null) {
      return 'termination not found';
    }
    return termination;
  }

  async findOne(id: string): Promise<any> {
    const termination = await this.terminationModel.findById(id).exec();
    if (termination === null) {
      return 'termination not found';
    }
    return termination;
  }

  async update(id: string, updateTerminationdto: TerminationDto): Promise<any> {
    const isIthere = await this.terminationModel.findById(id).exec();

    if (isIthere === null) {
      return 'termination not found';
    } else {
      const updated = this.terminationModel.findByIdAndUpdate(
        id,
        updateTerminationdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.terminationModel.findById(id).exec();

    if (isIthere === null) {
      return 'termination not found';
    } else {
      if (await this.terminationModel.findByIdAndRemove(id)) {
        return 'termination deleted successfully!';
      }
    }
  }
}
