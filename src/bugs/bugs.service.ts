import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BugsDocument } from './bugs.model';
import { BugsDto } from './bugs.dto';

@Injectable()
export class BugsService {
  constructor(
    @InjectModel('bugsdb')
    private readonly bugsModel: Model<BugsDocument>,
  ) {}

  async create(createBugsDto: BugsDto): Promise<any> {
    const bugs = new this.bugsModel(createBugsDto);
    return bugs.save();
  }

  async findAll(): Promise<any> {
    let bugs = this.bugsModel.find().exec();
    if (bugs === null) {
      return 'bugs not found';
    }
    return bugs;
  }

  async findOne(id: string): Promise<any> {
    const bugs = await this.bugsModel.findById(id).exec();
    if (bugs === null) {
      return 'bug not found';
    }
    return bugs;
  }

  async update(id: string, updateBugsdto: BugsDto): Promise<any> {
    const isIthere = await this.bugsModel.findById(id).exec();

    if (isIthere === null) {
      return 'bug not found';
    } else {
      const updated = this.bugsModel.findByIdAndUpdate(
        id,
        updateBugsdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.bugsModel.findById(id).exec();

    if (isIthere === null) {
      return 'bug not found';
    } else {
      if (await this.bugsModel.findByIdAndRemove(id)) {
        return 'bug deleted successfully!';
      }
    }
  }
}
