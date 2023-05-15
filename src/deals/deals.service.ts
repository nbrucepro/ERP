import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DealsDocument } from './deals.model';
import { DealsDto } from './deals.dto';

@Injectable()
export class DealsService {
  constructor(
    @InjectModel('dealsdb')
    private readonly dealsModel: Model<DealsDocument>,
  ) {}

  async create(createDealsDto: DealsDto): Promise<any> {
    const deals = new this.dealsModel(createDealsDto);
    return deals.save();
  }

  async findAll(): Promise<any> {
    let deals = this.dealsModel.find().exec();
    if (deals === null) {
      return 'deals not found';
    }
    return deals;
  }

  async findOne(id: string): Promise<any> {
    const deals = await this.dealsModel.findById(id).exec();
    if (deals === null) {
      return 'deal not found';
    }
    return deals;
  }

  async update(id: string, updateDealsdto: DealsDto): Promise<any> {
    const isIthere = await this.dealsModel.findById(id).exec();

    if (isIthere === null) {
      return 'deal not found';
    } else {
      const updated = this.dealsModel.findByIdAndUpdate(
        id,
        updateDealsdto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.dealsModel.findById(id).exec();

    if (isIthere === null) {
      return 'deal not found';
    } else {
      if (await this.dealsModel.findByIdAndRemove(id)) {
        return 'deal deleted successfully!';
      }
    }
  }
}
