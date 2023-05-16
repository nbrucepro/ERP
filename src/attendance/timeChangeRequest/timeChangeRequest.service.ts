import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TimeChangeRequestDocument } from './timeChangeRequest.model';
import { TimeChangeRequestDto } from './timeChangeRequest.dto';

@Injectable()
export class TimeChangeRequestService {
  constructor(
    @InjectModel('timeChangeRequestsdb')
    private readonly timeChangeRequestModel: Model<TimeChangeRequestDocument>,
  ) {}

  async create(createTimeChangeRequestDto: TimeChangeRequestDto): Promise<any> {
    const timeChangeRequest = new this.timeChangeRequestModel(createTimeChangeRequestDto);
    return timeChangeRequest.save();
  }

  async findAll(): Promise<any> {
    let timeChangeRequest = this.timeChangeRequestModel.find().exec();
    if (timeChangeRequest === null) {
      return 'timeChangeRequest not found';
    }
    return timeChangeRequest;
  }

  async findOne(id: string): Promise<any> {
    const timeChangeRequest = await this.timeChangeRequestModel.findById(id).exec();
    if (timeChangeRequest === null) {
      return 'timeChangeRequest not found';
    }
    return timeChangeRequest;
  }

  async update(id: string, updateTimeChangeRequestdto: TimeChangeRequestDto): Promise<any> {
    const isIthere = await this.timeChangeRequestModel.findById(id).exec();

    if (isIthere === null) {
      return 'timeChangeRequest not found';
    } else {
      const updated = this.timeChangeRequestModel.findByIdAndUpdate(
        id,
        updateTimeChangeRequestdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.timeChangeRequestModel.findById(id).exec();

    if (isIthere === null) {
      return 'timeChangeRequest not found';
    } else {
      if (await this.timeChangeRequestModel.findByIdAndRemove(id)) {
        return 'timeChangeRequest deleted successfully!';
      }
    }
  }
}
