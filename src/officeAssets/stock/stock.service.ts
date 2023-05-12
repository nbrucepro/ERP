import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StockDocument } from './stock.model';
import { StockDto } from './stock.dto';

@Injectable()
export class StockService {
  constructor(
    @InjectModel('office_assets_stock')
    private readonly stockModel: Model<StockDocument>,
  ) {}

  async create(createStockDto: StockDto): Promise<StockDto> {
    const stock = new this.stockModel(createStockDto);
    return stock.save();
  }

  async findAll(): Promise<any> {
    let stock = this.stockModel.find().exec();
    return stock;
  }

  async findOne(id: string): Promise<any> {
    return this.stockModel.findById(id).exec();
  }

  async update(id: string, updateStockdto: StockDto): Promise<any> {
    return this.stockModel.findByIdAndUpdate(id, updateStockdto, {
      new: true,
    });
  }

  async remove(id: string): Promise<any> {
    return this.stockModel.findByIdAndRemove(id);
  }
}
