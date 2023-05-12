import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobsDocument } from './jobs.model';
import { JobsDto } from './jobs.dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel('jobsdb')
    private readonly jobsModel: Model<JobsDocument>,
  ) {}

  async create(createJobsDto: JobsDto): Promise<JobsDto> {
    const jobs = new this.jobsModel(createJobsDto);
    return jobs.save();
  }

  async findAll(): Promise<any> {
    let jobs = this.jobsModel.find().exec();
    return jobs;
  }

  async findOne(id: string): Promise<any> {
    return this.jobsModel.findById(id).exec();
  }

  async update(id: string, updateJobsdto: JobsDto): Promise<any> {
    return this.jobsModel.findByIdAndUpdate(id, updateJobsdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.jobsModel.findByIdAndRemove(id);
  }
}
