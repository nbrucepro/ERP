import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OpportunitiesDocument } from './opportunities.model';
import { OpportunitiesDto } from './opportunities.dto';

@Injectable()
export class OpportunitiesService {
  constructor(
    @InjectModel('opportunitiesdb')
    private readonly opportunitiesModel: Model<OpportunitiesDocument>,
  ) {}

  async create(createOpportunitiesDto: OpportunitiesDto): Promise<any> {
    const opportunites = new this.opportunitiesModel(createOpportunitiesDto);
    return opportunites.save();
  }

  async findAll(): Promise<any> {
    let opportunites = this.opportunitiesModel.find().exec();
    if (opportunites === null) {
      return 'opportunites not found';
    }
    return opportunites;
  }

  async findOne(id: string): Promise<any> {
    const opportunity = await this.opportunitiesModel.findById(id).exec();
    if (opportunity === null) {
      return 'opportunity not found';
    }
    return opportunity;
  }

  async update(id: string, updateOpportunitiesdto: OpportunitiesDto): Promise<any> {
    const isIthere = await this.opportunitiesModel.findById(id).exec();

    if (isIthere === null) {
      return 'opportunity not found';
    } else {
      const updated = this.opportunitiesModel.findByIdAndUpdate(
        id,
        updateOpportunitiesdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.opportunitiesModel.findById(id).exec();

    if (isIthere === null) {
      return 'opportunity not found';
    } else {
      if (await this.opportunitiesModel.findByIdAndRemove(id)) {
        return 'opportunity deleted successfully!';
      }
    }
  }
}
