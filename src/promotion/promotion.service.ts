import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PromotionDocument } from './promotion.model';
import { PromotionDto } from './promotion.dto';

@Injectable()
export class PromotionService {
  constructor(
    @InjectModel('promotionsdb')
    private readonly promotionModel: Model<PromotionDocument>,
  ) {}

  async create(createPromotionDto: PromotionDto): Promise<any> {
    const promotion = new this.promotionModel(createPromotionDto);
    return promotion.save();
  }

  async findAll(): Promise<any> {
    let promotion = this.promotionModel.find().exec();
    if (promotion === null) {
      return 'promotion not found';
    }
    return promotion;
  }

  async findOne(id: string): Promise<any> {
    const promotion = await this.promotionModel.findById(id).exec();
    if (promotion === null) {
      return 'promotion not found';
    }
    return promotion;
  }

  async update(id: string, updatePromotiondto: PromotionDto): Promise<any> {
    const isIthere = await this.promotionModel.findById(id).exec();

    if (isIthere === null) {
      return 'promotion not found';
    } else {
      const updated = this.promotionModel.findByIdAndUpdate(
        id,
        updatePromotiondto,
        {
          new: true,
        },
      );

      return updated;
    }
  }

  async remove(id: string): Promise<any> {
    const isIthere = await this.promotionModel.findById(id).exec();

    if (isIthere === null) {
      return 'promotion not found';
    } else {
      if (await this.promotionModel.findByIdAndRemove(id)) {
        return 'promotion deleted successfully!';
      }
    }
  }
}
