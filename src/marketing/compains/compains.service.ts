import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompainsDocument } from './compains.model';
import { CompainsDto } from './compains.dto';

@Injectable()
export class CompainsService {
  constructor(
    @InjectModel('compainsdb')
    private readonly compainsModel: Model<CompainsDocument>,
  ) {}

  async create(createCompainsDto: CompainsDto): Promise<any> {
    const compains = new this.compainsModel(createCompainsDto);
    return compains.save();
  }

  async findAll(): Promise<any> {
    let compains = this.compainsModel.find().exec();
    if (compains === null) {
      return 'compains not found';
    }
    return compains;
  }

  async findOne(id: string): Promise<any> {
    const compains = await this.compainsModel.findById(id).exec();
    if (compains === null) {
      return 'compain not found';
    }
    return compains;
  }

  async update(id: string, updateCompainsdto: CompainsDto): Promise<any> {
    const isIthere = await this.compainsModel.findById(id).exec();

    if (isIthere === null) {
      return 'compain not found';
    } else {
      const updated = this.compainsModel.findByIdAndUpdate(
        id,
        updateCompainsdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.compainsModel.findById(id).exec();

    if (isIthere === null) {
      return 'compain not found';
    } else {
      if (await this.compainsModel.findByIdAndRemove(id)) {
        return 'compain deleted successfully!';
      }
    }
  }
}
