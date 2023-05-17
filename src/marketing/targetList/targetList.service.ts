import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TargetListDocument } from './targetList.model';
import { TargetListDto } from './targetList.dto';

@Injectable()
export class TargetListService {
  constructor(
    @InjectModel('targetlistsdb')
    private readonly targetListModel: Model<TargetListDocument>,
  ) {}

  async create(createTargetListDto: TargetListDto): Promise<any> {
    const targetlist = new this.targetListModel(createTargetListDto);
    return targetlist.save();
  }

  async findAll(): Promise<any> {
    let targetlist = this.targetListModel.find().exec();
    if (targetlist === null) {
      return 'targetlist not found';
    }
    return targetlist;
  }

  async findOne(id: string): Promise<any> {
    const targetlist = await this.targetListModel.findById(id).exec();
    if (targetlist === null) {
      return 'targetList not found';
    }
    return targetlist;
  }

  async update(id: string, updateTargetListdto: TargetListDto): Promise<any> {
    const isIthere = await this.targetListModel.findById(id).exec();

    if (isIthere === null) {
      return 'targetList not found';
    } else {
      const updated = this.targetListModel.findByIdAndUpdate(
        id,
        updateTargetListdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.targetListModel.findById(id).exec();

    if (isIthere === null) {
      return 'targetList not found';
    } else {
      if (await this.targetListModel.findByIdAndRemove(id)) {
        return 'targetList deleted successfully!';
      }
    }
  }
}
